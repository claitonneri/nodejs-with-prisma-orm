import { Category, PrismaClient } from '@prisma/client';

import ICreateCategoryDTO from "@modules/categories/dtos/ICreateCategoryDTO";
import ICategoriesRepository from "@modules/categories/repositories/ICategoriesRepository";

const prisma = new PrismaClient()

class CategoriesRepository implements ICategoriesRepository {

  async create({ name, description }: ICreateCategoryDTO): Promise<Category>{
    const category = await prisma.category.create({
      data: {
        name,
        description
      }
    });

    return category;
  }
}

export default CategoriesRepository;