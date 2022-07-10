import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { TypeOrmCrudService } from "@nestjsx/crud-typeorm";
import { Repository } from "typeorm";
import { BasketItem } from "../entities";

@Injectable()
export class BasketItemsService extends TypeOrmCrudService<BasketItem> {
    constructor(@InjectRepository(BasketItem) repo: Repository<BasketItem>) {
        super(repo);
    }
}