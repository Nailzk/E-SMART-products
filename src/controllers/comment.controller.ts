import { Controller } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { Crud, CrudController } from "@nestjsx/crud";
import { Comment } from "../entities";
import { CommentsService } from "../providers";

@Crud({
    model: {
        type: Comment,
    },
})
@ApiTags('Comments')
@Controller("comments")
export class CommentsController implements CrudController<Comment> {
    constructor(public service: CommentsService) {}
}
