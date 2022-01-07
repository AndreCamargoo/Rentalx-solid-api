import { Category } from "../model/Category";

//DTO => Data Transfer object
interface ICreateCategoryDTO {
    name: string;
    description: string;
}

interface ICategoriesRepository {
    create({description, name} :ICreateCategoryDTO): void
    findByName(name: string): Category
    list(): Category[]    
}

export { ICategoriesRepository, ICreateCategoryDTO }