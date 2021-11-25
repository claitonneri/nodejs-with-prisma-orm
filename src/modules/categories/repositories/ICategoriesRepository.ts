import { Category } from "@prisma/client";

import ICreateCategoryDTO from "../dtos/ICreateCategoryDTO";

export default interface ICategoriesRepository {
  create({name, description}: ICreateCategoryDTO): Promise<Category>;
}