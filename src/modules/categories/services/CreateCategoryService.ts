import { inject, injectable } from "tsyringe";

import ICategoriesRepository from "../repositories/ICategoriesRepository";

@injectable()
class CreateCategoryService {
  constructor(
    @inject('CategoriesRepository')
    private categoriesRepository: ICategoriesRepository
  ) {
    
  }
  
  async execute(){}
}

export default CreateCategoryService;