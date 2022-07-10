import { Controller } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { Crud, CrudController } from "@nestjsx/crud";
import { CategoryType } from "../entities";
import { CategoryTypesService } from "../providers";

@Crud({
    model: {
        type: CategoryType,
    },
})
@ApiTags('Category Types')
@Controller("category-types")
export class CategoryTypesController implements CrudController<CategoryType> {
    constructor(public service: CategoryTypesService) {}
}
