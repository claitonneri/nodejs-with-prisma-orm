import { Request, Response } from "express";
import { container } from 'tsyringe';

import CreateCategoryService from '@modules/categories/services/CreateCategoryService';

class CategoriesController {
  async create(request: Request, response: Response): Promise<Response> {
    const { name, description } = request.body;

    const createCategory = container.resolve(CreateCategoryService);

    return response.json({ message: "ok" });
  }
}

export default CategoriesController;
