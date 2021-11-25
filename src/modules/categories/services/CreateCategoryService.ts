import { Category } from "@prisma/client";
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
    const category = await this.categoriesRepository.create({ name, description });

    return category;
  }
}

export default CreateCategoryService;