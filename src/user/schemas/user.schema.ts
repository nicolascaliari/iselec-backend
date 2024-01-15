import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";


@Schema({
    timestamps: true

})

export class user {

    @Prop({
        required: true,
        trim: true,
    })
    username: string;


    @Prop({
        required: true,
        trim: true,
    })
    email: string;


    @Prop({
        required: true,
        trim: true,
    })
    password: string;


    @Prop({
        required: true,
        trim: true,
    })
    role: string;
}

export const userSchema = SchemaFactory.createForClass(user);