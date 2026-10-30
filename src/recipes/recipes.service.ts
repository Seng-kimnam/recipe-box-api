import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateRecipeDto } from './dto/create-recipe.dto';
import { UpdateRecipeDto } from './dto/update-recipe.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Recipe } from './entities/recipe.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RecipesService {
  constructor(
    @InjectRepository(Recipe)
    private readonly recipeRepository: Repository<Recipe>
  ) {}


  async create(createRecipeDto: CreateRecipeDto) {
    if(!createRecipeDto.title || !createRecipeDto.description) {
      throw new BadRequestException('Title and description are required');
    }
    const recipe = this.recipeRepository.create(createRecipeDto);  
    return this.recipeRepository.save(recipe);
  }

  findAll() {
    return this.recipeRepository.find();
  }

  async findOne(id: number) {
    const recipe = await this.recipeRepository.findOneBy({id});
    if (!recipe) {
      throw new NotFoundException(`Recipe with id ${id} not found`);
    }
    return recipe;
  }

  
  async update(id: number,updateRecipeDto: UpdateRecipeDto) {

    // await fakeDatabaseDelay();
    const task = await this.recipeRepository.findOneBy({ id });
    
    if (!task) {
      throw new NotFoundException(`Recipe with id ${id} not found for update`);
    } 
    if(task.title === updateRecipeDto.title && task.isFavorite === updateRecipeDto.isFavorite) {
      throw new NotFoundException(`Recipe with id ${id} has no changes to update`);
    }
    Object.assign(task, updateRecipeDto);
    const updatedTask = await this.recipeRepository.save(task);
    // this.eventEmitter.emit('task.updated', { taskId: updatedTask.id, title: updatedTask.title , done: updatedTask.done});
    return updatedTask;
  }

   async remove(id: number) {
    
      const result = await this.recipeRepository.delete(id);
    if(result.affected === 0) {
      throw new NotFoundException(`Recipe with id ${id} not found to delete`);
    }

    return {message: `Recipe with id ${id} has been removed.`};
  }
}
