import { Module } from '@nestjs/common';
import { TestimonialsController } from './testimonials.controller';
import { TestimonialsService } from './testimonials.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Testimonial, TestimonialSchema } from './schemas/testimonial.schema';

@Module({
  imports: [
 MongooseModule.forFeature([
      {
        name: Testimonial.name,
        schema: TestimonialSchema
      }
    ]),
  ],
  controllers: [TestimonialsController],
  providers: [TestimonialsService]
})
export class TestimonialsModule {}
