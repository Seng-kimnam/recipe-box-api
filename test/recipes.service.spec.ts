import { Test } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { RecipesService } from '../src/recipes/recipes.service';
import { Recipe } from '../src/recipes/entities/recipe.entity';
import { NotFoundException } from '@nestjs/common';


describe('RecipesService', () => {
  let service: RecipesService;

  const mockRepository = {
    findOneBy: jest.fn(),
    create: jest.fn(),
    save: jest.fn(),
  };

  beforeEach(async () => {
    jest.clearAllMocks();
    const moduleRef = await Test.createTestingModule({
      providers: [
        RecipesService,
        { provide: getRepositoryToken(Recipe), useValue: mockRepository },
      ],
    }).compile();

    service = moduleRef.get(RecipesService);
  });

  it('findOne returns the task when it exists', async () => {
    mockRepository.findOneBy.mockResolvedValue({ id: 1, title: 'Buy milk', description: 'Get milk from the store', isFavorite: false });

    const task = await service.findOne(1);

    expect(task.title).toBe('Buy milk');
    expect(mockRepository.findOneBy).toHaveBeenCalledWith({ id: 1 });
  });

  it('findOne throws NotFoundException when the task is missing', async () => {
    mockRepository.findOneBy.mockResolvedValue(null);

    await expect(service.findOne(999)).rejects.toThrow(NotFoundException);
  });

  it('create saves the recipe', async () => {
    mockRepository.create.mockReturnValue({ title: 'Buy milk', description: 'Get milk from the store', isFavorite: false });
    mockRepository.save.mockResolvedValue({ id: 7, title: 'Buy milk', description: 'Get milk from the store', isFavorite: false });

    const task = await service.create({ title: 'Buy milk' , description: 'Get milk from the store', isFavorite: false});

    expect(task.id).toBe(7);
    expect(mockRepository.save).toHaveBeenCalled();
  });
});