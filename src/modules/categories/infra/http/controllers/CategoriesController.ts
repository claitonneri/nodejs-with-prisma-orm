import { Request, Response } from "express";

class CategoriesController {
  async create(_: Request, response: Response): Promise<Response> {
    return response.json({ message: "ok" });
  }
}

export default CategoriesController;
