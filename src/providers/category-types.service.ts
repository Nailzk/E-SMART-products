import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { TypeOrmCrudService } from "@nestjsx/crud-typeorm";
import { Repository } from "typeorm";
import { CategoryType } from "../entities";

@Injectable()
export class CategoryTypesService extends TypeOrmCrudService<CategoryType> {
    constructor(@InjectRepository(CategoryType) repo: Repository<CategoryType>) {
        super(repo);
    }
}