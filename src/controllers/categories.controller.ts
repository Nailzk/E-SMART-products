import { Controller } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { Crud, CrudController } from "@nestjsx/crud";
import { Category } from "../entities";
import { CategoriesService } from "../providers";

@Crud({
    model: {
        type: Category,
    },
})
@ApiTags('Categories')
@Controller("categories")
export class CategoriesController implements CrudController<Category> {
    constructor(public service: CategoriesService) {}
}
