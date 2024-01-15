import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";


@Schema({
    timestamps: true

})
export class category {

    @Prop({
        required: true,
        trim: true,
    })
    idCategory: number;

    @Prop({
        required: true,
        trim: true,
    })
    name: string;
}

export const categorySchema = SchemaFactory.createForClass(category);