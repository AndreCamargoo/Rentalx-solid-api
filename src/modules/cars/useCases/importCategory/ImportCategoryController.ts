import { Request, Response } from 'express'
import { ImportCatetoryUseCase } from './ImportCategoryUseCase';

class ImportCategoryController {

    constructor(private importCategoryUseCase: ImportCatetoryUseCase) {}

    handle(request: Request, response: Response ): Response {

        const { file } = request
        
        this.importCategoryUseCase.execute(file)

        return response.send();
    }

}

export { ImportCategoryController }