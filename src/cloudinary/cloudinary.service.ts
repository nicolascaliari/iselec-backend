import { Injectable } from '@nestjs/common';
import {v2 as cloudinary} from 'cloudinary';
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
}
