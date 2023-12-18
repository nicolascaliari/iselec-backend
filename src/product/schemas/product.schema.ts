import { Schema, Prop , SchemaFactory} from "@nestjs/mongoose";


@Schema({
    timestamps: true

})

export class product {

    @Prop({
        required: true,
        trim: true,
    })
    name: string;

    @Prop({
        required: true,
        trim: true,
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
    idCategory: number;

    @Prop({
        required: true,
        trim: true,
    })
    file: string;
}

export const productSchema = SchemaFactory.createForClass(product);