import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Testimonial } from './schemas/testimonial.schema';
import { CreateTestimonialDto } from './dto/create-testimonial.dto';
import { UpdateTestimonialDto } from './dto/update-testimonial.dto';

@Injectable()
export class TestimonialsService {

    constructor(@InjectModel(Testimonial.name) private TestimonialModel: Model<Testimonial>) { }


    findAll() {
        return this.TestimonialModel.find();
    }

    create(testimonial: CreateTestimonialDto) {
        const createdTestimonial = new this.TestimonialModel(testimonial);
        return createdTestimonial.save();
    }

    update(id: string, testimonial: UpdateTestimonialDto) {
        return this.TestimonialModel.findByIdAndUpdate(id, testimonial);
    }


    delete(id: string) {
        return this.TestimonialModel.deleteOne({ _id: id }).lean();
    }
}
