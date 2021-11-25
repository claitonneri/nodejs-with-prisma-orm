import { PrismaClient } from '@prisma/client';
import { Category } from ".prisma/client";

import ICreateCategoryDTO from "@modules/categories/dtos/ICreateCategoryDTO";
import ICategoriesRepository from "@modules/categories/repositories/ICategoriesRepository";

class CategoriesRepository implements ICategoriesRepository {
  private prisma = new PrismaClient();

  async create({ name, description }: ICreateCategoryDTO): Promise<Category>{
    const category = this.prisma.category.create({
      data: {
        name,
        description
      }
    });

    return category;
  }
}

export default CategoriesRepository;