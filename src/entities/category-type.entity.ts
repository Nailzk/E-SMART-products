import { ApiProperty } from "@nestjsx/crud/lib/crud";
import {
    Column,
    CreateDateColumn,
    Entity,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
} from "typeorm";
import { CategorySubject } from "./category-subject.entity";
import { Category } from "./category.entity";
import { Product } from "./product.entity";

@Entity("category_types")
export class CategoryType {
    @ApiProperty()
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty()
    @Column({ type: "varchar", length: 255, nullable: false })
    name: string;

    @ApiProperty()
    @OneToMany(() => Product, (product) => product.categoryType)
    products: Product[];

    @ApiProperty({ type: () => Category })
    @ManyToOne(() => Category, (category) => category.categoryType)
    category: Category;

    @ApiProperty()
    @Column({ type: "integer", nullable: false })
    categoryId: number;

    @ApiProperty({ type: () => CategorySubject })
    @OneToMany(() => CategorySubject, (categorySubject) => categorySubject.categoryType)
    categorySubject: CategorySubject[];

    @CreateDateColumn()
    createdAt: Date;
}
