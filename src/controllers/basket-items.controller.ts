import { Controller } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { Crud, CrudController } from "@nestjsx/crud";
import { BasketItem } from "../entities";
import { BasketItemsService } from "../providers";

@Crud({
    model: {
        type: BasketItem,
    },
    query: {
        join: {
            product: {},
        },
    },
})
@ApiTags("Basket Items")
@Controller("basket-items")
export class BasketItemsController implements CrudController<BasketItem> {
    constructor(public service: BasketItemsService) {}
}
