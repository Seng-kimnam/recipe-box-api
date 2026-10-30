"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecipesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const recipe_entity_1 = require("./entities/recipe.entity");
const typeorm_2 = require("typeorm");
let RecipesService = class RecipesService {
    recipeRepository;
    constructor(recipeRepository) {
        this.recipeRepository = recipeRepository;
    }
    async create(createRecipeDto) {
        if (!createRecipeDto.title || !createRecipeDto.description) {
            throw new common_1.BadRequestException('Title and description are required');
        }
        const recipe = this.recipeRepository.create(createRecipeDto);
        return this.recipeRepository.save(recipe);
    }
    findAll() {
        return this.recipeRepository.find();
    }
    async findOne(id) {
        const recipe = await this.recipeRepository.findOneBy({ id });
        if (!recipe) {
            throw new common_1.NotFoundException(`Recipe with id ${id} not found`);
        }
        return recipe;
    }
    async update(id, updateRecipeDto) {
        const task = await this.recipeRepository.findOneBy({ id });
        if (!task) {
            throw new common_1.NotFoundException(`Recipe with id ${id} not found for update`);
        }
        if (task.title === updateRecipeDto.title && task.isFavorite === updateRecipeDto.isFavorite) {
            throw new common_1.NotFoundException(`Recipe with id ${id} has no changes to update`);
        }
        Object.assign(task, updateRecipeDto);
        const updatedTask = await this.recipeRepository.save(task);
        return updatedTask;
    }
    async remove(id) {
        const result = await this.recipeRepository.delete(id);
        if (result.affected === 0) {
            throw new common_1.NotFoundException(`Recipe with id ${id} not found to delete`);
        }
        return { message: `Recipe with id ${id} has been removed.` };
    }
};
exports.RecipesService = RecipesService;
exports.RecipesService = RecipesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(recipe_entity_1.Recipe)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], RecipesService);
//# sourceMappingURL=recipes.service.js.map