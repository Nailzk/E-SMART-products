import { Controller } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { Crud, CrudController } from "@nestjsx/crud";
import { CategorySubject } from "../entities";
import { CategorySubjectsService } from "../providers";

@Crud({
    model: {
        type: CategorySubject,
    },
})
@ApiTags('Category Subject')
@Controller("category-subjects")
export class CategorySubjectsController implements CrudController<CategorySubject> {
    constructor(public service: CategorySubjectsService) {}
}
