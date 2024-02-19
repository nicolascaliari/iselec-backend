import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";

@Schema({
    timestamps: true
})
export class Product {

    @Prop({
        trim: true,
    })
    id: string;

    @Prop({
        required: true,
        trim: true,
    })
    name: string;

    @Prop({
        required: true,
        trim: true,
        index: false
    })
    description: string;

    @Prop({
        required: true,
        trim: true,
    })
    price: number;

    @Prop({
        required: true,
        trim: true,
    })
    idCategory: string;

    @Prop({
        required: true,
        trim: true,
    })
    file: string;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
