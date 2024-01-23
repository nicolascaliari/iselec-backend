import { Injectable } from '@nestjs/common';
import { v2 as cloudinary } from 'cloudinary';
import { CloudinaryResponse } from './clodinary-response';
const streamifier = require('streamifier');

@Injectable()
export class CloudinaryService {

    uploadFile(file: Express.Multer.File, publicId: string | undefined = undefined) {
        return new Promise<CloudinaryResponse>((resolve, reject) => {
            const uploadStream = cloudinary.uploader.upload_stream(
                {
                    public_id: publicId,
                },
                (error, result) => {
                    if (error) return reject(error);
                    resolve(result);
                }
            );

            streamifier.createReadStream(file.buffer).pipe(uploadStream);
        });
    }

    getImageUrlByPublicId(publicId: string): string {
        return cloudinary.url(publicId, { secure: true });
    }


    async deleteImageByPublicId(publicId: string): Promise<void> {
        try {
            // Utiliza la API de Cloudinary para eliminar la imagen por su public_id
            await cloudinary.uploader.destroy(publicId, { invalidate: true });

            // Nota: `{ invalidate: true }` invalidará la caché de CDN
            // Ajusta según tus necesidades
        } catch (error) {
            console.error('Error al eliminar la imagen de Cloudinary:', error);
            throw new Error('Error al eliminar la imagen de Cloudinary');
        }
    }
}
