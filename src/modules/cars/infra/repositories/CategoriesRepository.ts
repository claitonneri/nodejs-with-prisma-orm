import { Category, PrismaClient } from '@prisma/client';

import ICreateCategoryDTO from "@modules/categories/dtos/ICreateCategoryDTO";
import ICategoriesRepository from "@modules/categories/repositories/ICategoriesRepository";

const prisma = new PrismaClient()

class CategoriesRepository implements ICategoriesRepository {

  async find(): Promise<Category[]> {
    const categories = await prisma.category.findMany();

    return categories;
  }

  async findByName(name: string): Promise<Category | null> {
    const category = await prisma.category.findUnique({ where: { name } });

    return category;
  }

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