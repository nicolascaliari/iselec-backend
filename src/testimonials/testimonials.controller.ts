import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { TestimonialsService } from './testimonials.service';
import { CreateTestimonialDto } from './dto/create-testimonial.dto';
import { UpdateTestimonialDto } from './dto/update-testimonial.dto';

@Controller('testimonials')
export class TestimonialsController {
    constructor(private testimonialService: TestimonialsService) { }


    @Get()
    async findAll() {
        return this.testimonialService.findAll();
    }


    @Post('')
    async create(@Body() testimonial: CreateTestimonialDto) {
        return await this.testimonialService.create(testimonial);
    }


    @Put(':id')
    async update(@Param('id') id: string, @Body() testimonial: UpdateTestimonialDto) {
        return await this.testimonialService.update(id, testimonial);
    }


    @Delete(':id')
    async delete(@Param('id') id: string) {
        try {
            return await this.testimonialService.delete(id);
        } catch (err) {
            console.error(err);
        }
    }
}
