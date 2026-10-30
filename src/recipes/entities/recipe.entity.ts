import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("recipes")
export class Recipe {


    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    title: string;

    @Column()
    description: string;

    @Column({type: "boolean", default: false})
    isFavorite: boolean;

}
