import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("recipes")
export class Recipe {


    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    description: string;

    @Column({type: "boolean", default: false})
    isFavorite: boolean;

}
