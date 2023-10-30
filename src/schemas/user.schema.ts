import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";


@Schema({
    timestamps: true

})

export class user {

    @Prop({
        required: true,
        trim: true,
        unique: true
    })
    username: string;


    @Prop({
        required: true,
        trim: true,
        unique: true
    })
    password: string;
}

export const userSchema = SchemaFactory.createForClass(user);