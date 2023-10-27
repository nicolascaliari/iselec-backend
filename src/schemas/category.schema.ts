import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";


@Schema({
    timestamps: true

})
export class CategoryP {
    @Prop({
        required: true,
        trim: true,
        unique: true
    })
    nombre: string;

    @Prop({
        required: true,
        trim: true,
    })
    descripcion: string;

    @Prop({
        required: true,
        trim: true,
    })
    precio: number;
}

export const TaskSchema = SchemaFactory.createForClass(CategoryP);