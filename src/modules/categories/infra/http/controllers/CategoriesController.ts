import { Request, Response } from "express";
import { container } from 'tsyringe';

import CreateCategoryService from '@modules/categories/services/CreateCategoryService';
import ListCategoriesService from "@modules/categories/services/ListCategoriesService";

class CategoriesController {
  async index(_: Request, response: Response): Promise<Response> {
    const listCategories = container.resolve(ListCategoriesService);

    const categories = await listCategories.execute();

    return response.status(200).json(categories);
    
  }

  async create(request: Request, response: Response): Promise<Response> {
    const { name, description } = request.body;

    const createCategory = container.resolve(CreateCategoryService);

    const category = await createCategory.execute({name, description});

    return response.status(201).json(category);
  }
}

export default CategoriesController;
