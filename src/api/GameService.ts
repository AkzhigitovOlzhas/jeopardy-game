import axios from "axios";
import { ICategory } from "../types/gameTypes";

export class gameService {
  static async getQuestions(categoryId: number): Promise<ICategory> {
    const response = await axios.get<ICategory>(
      "http://jservice.io/api/category",
      {
        params: { id: categoryId },
      }
    );
    return response.data;
  }
  static async getCategories(count: number = 5): Promise<ICategory[]> {
    const response = await axios.get<ICategory[]>(
      "http://jservice.io/api/categories",
      {
        params: { count },
      }
    );
    return response.data;
  }
}
