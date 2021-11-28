import { inject, injectable } from "tsyringe";

import { Category } from "@prisma/client";

import ICategoriesRepository from "../repositories/ICategoriesRepository";

@injectable()
class ListCategoriesService {
  constructor(
    @inject('CategoriesRepository')
    private categoriesRepository: ICategoriesRepository
  ){}

  async execute(): Promise<Category[]>{
    const categories = await this.categoriesRepository.find();

    return categories;
  }
}

export default ListCategoriesService;