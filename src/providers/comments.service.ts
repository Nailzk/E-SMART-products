import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { TypeOrmCrudService } from "@nestjsx/crud-typeorm";
import { Repository } from "typeorm";
import { BasketItem, Comment } from "../entities";

@Injectable()
export class CommentsService extends TypeOrmCrudService<Comment> {
    constructor(@InjectRepository(BasketItem) repo: Repository<Comment>) {
        super(repo);
    }
}