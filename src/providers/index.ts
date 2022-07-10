import { BasketItemsService } from "./basket-items.service";
import { CategoriesService } from "./categories.service";
import { CategorySubjectsService } from "./category-subjects.service";
import { CategoryTypesService } from "./category-types.service";
import { CommentsService } from "./comments.service";
import { ProductsService } from "./products.service";

export {
    ProductsService,
    CategoriesService,
    CategorySubjectsService,
    CategoryTypesService,
    BasketItemsService,
    CommentsService,
};

export default [
    ProductsService,
    CategoriesService,
    CategorySubjectsService,
    CategoryTypesService,
    BasketItemsService,
    CommentsService,
];
