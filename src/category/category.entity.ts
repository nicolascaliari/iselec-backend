import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';



@Entity()
export class Category{
    @PrimaryGeneratedColumn()
    idcategory:number;

    @Column()
    name:string;

    @Column()
    description:string; 
}