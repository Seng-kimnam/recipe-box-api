import { IsBoolean, IsNotEmpty, IsString } from "class-validator";

export class CreateRecipeDto {
    @IsString()
    @IsNotEmpty()
    title: string;
    
    @IsNotEmpty()
    @IsString()
    description: string;

    @IsBoolean()
    isFavorite: boolean;
}
