
import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";
import { ListCategorirsController } from "./ListCategoriesController";
import { ListCategoriesUseCase } from "./ListCategoriesUseCase";

const categoriesRepository = CategoriesRepository.getInstace()
const listCategoriesUseCase = new ListCategoriesUseCase(categoriesRepository)
const listCategoriesController = new ListCategorirsController(listCategoriesUseCase)

export { listCategoriesController }