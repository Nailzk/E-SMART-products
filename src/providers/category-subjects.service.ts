import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { TypeOrmCrudService } from "@nestjsx/crud-typeorm";
import { Repository } from "typeorm";
import { CategorySubject } from "../entities";

@Injectable()
export class CategorySubjectsService extends TypeOrmCrudService<CategorySubject> {
    constructor(@InjectRepository(CategorySubject) repo: Repository<CategorySubject>) {
        super(repo);
    }
}