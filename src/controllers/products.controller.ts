import { Controller } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { Crud, CrudController } from "@nestjsx/crud";
import { Product } from "../entities";
import { ProductsService } from "../providers";

@Crud({
    model: {
        type: Product,
    },
})
@ApiTags('Products')
@Controller("products")
export class ProductsController implements CrudController<Product> {
    constructor(public service: ProductsService) {}
}
