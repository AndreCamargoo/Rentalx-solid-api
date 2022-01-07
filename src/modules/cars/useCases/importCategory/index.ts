import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";
import { ImportCategoryController } from "./ImportCategoryController";
import { ImportCatetoryUseCase } from "./ImportCategoryUseCase";

const categoriesRepository = CategoriesRepository.getInstace()
const imporCategoryUseCase = new ImportCatetoryUseCase(categoriesRepository)
const importCategoryController = new ImportCategoryController(imporCategoryUseCase)

export { importCategoryController }