import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";


@Schema({
    timestamps: true

})
export class category {

    @Prop({
        required: true,
        trim: true,
    })
    name: string;



    @Prop({
        required: true,
        trim: true,
    })
    file: string;
}

export const categorySchema = SchemaFactory.createForClass(category);