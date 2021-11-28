import { Category } from "@prisma/client";

import ICreateCategoryDTO from "../dtos/ICreateCategoryDTO";

export default interface ICategoriesRepository {
  find(): Promise<Category[]>;
  findByName(name: string): Promise<Category | null>
  create({name, description}: ICreateCategoryDTO): Promise<Category>;
}