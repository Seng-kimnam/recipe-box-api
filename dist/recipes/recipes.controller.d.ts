import { RecipesService } from './recipes.service';
import { CreateRecipeDto } from './dto/create-recipe.dto';
import { UpdateRecipeDto } from './dto/update-recipe.dto';
export declare class RecipesController {
    private readonly recipesService;
    constructor(recipesService: RecipesService);
    findAll(): Promise<import("./entities/recipe.entity").Recipe[]>;
    findOne(id: string): Promise<import("./entities/recipe.entity").Recipe>;
    create(createRecipeDto: CreateRecipeDto): Promise<import("./entities/recipe.entity").Recipe>;
    update(id: string, updateRecipeDto: UpdateRecipeDto): Promise<import("./entities/recipe.entity").Recipe>;
    remove(id: string): Promise<{
        message: string;
    }>;
}
