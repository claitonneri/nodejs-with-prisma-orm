import { Category } from "@prisma/client";
import { response } from "express";
import { inject, injectable } from "tsyringe";

import ICreateCategoryDTO from "../dtos/ICreateCategoryDTO";
import ICategoriesRepository from "../repositories/ICategoriesRepository";

@injectable()
class CreateCategoryService {
  constructor(
    @inject('CategoriesRepository')
    private categoriesRepository: ICategoriesRepository
  ) {}
  
  async execute({ name, description }: ICreateCategoryDTO): Promise<Category>{
    const categoryExists = await this.categoriesRepository.findByName(name);

    if (categoryExists) {
      throw new Error("Category already exists.");
    }
    
    const category = await this.categoriesRepository.create({ name, description });

    return category;
  }
}

export default CreateCategoryService;