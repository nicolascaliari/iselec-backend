import { Schema, Prop , SchemaFactory} from "@nestjs/mongoose";


@Schema({
    timestamps: true

})

export class product {

    @Prop({
        required: true,
        trim: true,
        unique: true
    })
    name: string;

    @Prop({
        required: true,
        trim: true,
        unique: true
    })
    description: string;

    @Prop({
        required: true,
        trim: true,
        unique: true
    })
    price: number;

    @Prop({
        required: true,
        trim: true,
        unique: true
    })
    idCategory: number;
}

export const productSchema = SchemaFactory.createForClass(product);