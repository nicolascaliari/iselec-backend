import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";


@Schema({
    timestamps: true
})  

export class Testimonial {

    @Prop({
        required: true,
        trim: true,
    })
    message: string;

    @Prop({
        required: true,
        trim: true,
    })
    numberStars: number;

    @Prop({
        required: true,
        trim: true,
    })
    name: string;

    @Prop({
        required: false,
        trim: true,
    })
    answer: string;
}

export const TestimonialSchema = SchemaFactory.createForClass(Testimonial);