import { Request, Response } from "express";
import { ListCategoriesUseCase } from "./ListCategoriesUseCase";


class ListCategorirsController {

    constructor(private listCategoryUseCase: ListCategoriesUseCase) {}

    handle( request: Request, response: Response ): Response {
        const all = this.listCategoryUseCase.execute()

        return response.json(all)
    }

}

export { ListCategorirsController }