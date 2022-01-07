import { Specification } from "../model/Specification";

//DTO => Data Transfer object
interface ICreateSpecificationDTO {
    name: string;
    description: string;
}

interface ISpecificationRepository {
    create({name, description}: ICreateSpecificationDTO): void
    findByName(name: string): Specification
    list(): Specification[]    
}

export { ISpecificationRepository, ICreateSpecificationDTO }