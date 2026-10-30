import { CreateRecipeDto } from './dto/create-recipe.dto';
import { UpdateRecipeDto } from './dto/update-recipe.dto';
import { Recipe } from './entities/recipe.entity';
import { Repository } from 'typeorm';
export declare class RecipesService {
    private readonly recipeRepository;
    constructor(recipeRepository: Repository<Recipe>);
    create(createRecipeDto: CreateRecipeDto): Promise<Recipe>;
    findAll(): Promise<Recipe[]>;
    findOne(id: number): Promise<Recipe>;
    update(id: number, updateRecipeDto: UpdateRecipeDto): Promise<Recipe>;
    remove(id: number): Promise<{
        message: string;
    }>;
}
