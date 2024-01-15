// import {v2 as cloudinary} from 'cloudinary';

// export const CloudinaryProvider = {
//     provide : 'CLOUDINARY',
//     useFactory: () => {
//         return cloudinary.config({
//             cloud_name: 'fidelitycode', 
//             api_key: '334882826751959', 
//             api_secret: 'II3CMmMNMYeY112HYWXIBDepfbU' 
//         })
//     }
// }


// cloudinary.provider.ts

import { v2 as cloudinary } from 'cloudinary';
import { ConfigService } from '@nestjs/config';

export const CloudinaryProvider = {
  provide: 'CLOUDINARY',
  useFactory: async (configService: ConfigService) => {
    return cloudinary.config({
      cloud_name: configService.get<string>('CLOUDINARY_NAME'),
      api_key: configService.get<string>('CLOUDINARY_API_KEY'),
      api_secret: configService.get<string>('CLOUDINARY_API_SECRET'),
    });
  },
  inject: [ConfigService],
};


