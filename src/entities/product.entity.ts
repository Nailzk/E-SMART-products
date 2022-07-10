import { ApiProperty } from "@nestjsx/crud/lib/crud";
import { GenderEnum, SkinType, UseTimeEnum } from "../enum";
import {
    Column,
    CreateDateColumn,
    Entity,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
} from "typeorm";
import { Category } from "./category.entity";
import { CategoryType } from "./category-type.entity";
import { CategorySubject } from "./category-subject.entity";
import { BasketItem } from "./basket-item.entity";
import { Comment } from "./comment.entity";

@Entity("products")
export class Product {
    @ApiProperty()
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty()
    @Column({ type: "varchar", length: 255, nullable: false })
    name: string;

    @ApiProperty()
    @Column({ type: "text", nullable: true })
    description: string;

    @ApiProperty()
    @Column("simple-array", { array: true, default: [] })
    rates: number[];

    @ApiProperty()
    @Column("simple-array", { array: true, default: [] })
    photoBase64s: string[];

    @ApiProperty()
    @Column({ type: "varchar", length: 555, nullable: false })
    appointment: string;

    @ApiProperty()
    @Column({ type: "enum", enum: GenderEnum, default: GenderEnum.FEMALE })
    gender: GenderEnum;

    @ApiProperty()
    @Column({ type: "enum", enum: SkinType, default: SkinType.NORMAL })
    skinType: SkinType;

    @ApiProperty()
    @Column({ type: "enum", enum: UseTimeEnum, default: UseTimeEnum.UNIVERSAL })
    useTime: SkinType;

    @ApiProperty()
    @Column({ type: "varchar", length: 255, nullable: false })
    classification: GenderEnum;

    @ApiProperty()
    @Column({ type: "integer", nullable: true })
    volume: number;

    @ApiProperty()
    @Column({ type: "varchar", length: 124, nullable: false })
    country: string;

    @ApiProperty()
    @Column({ type: "integer", nullable: true })
    agePlus: number;

    @ApiProperty({ type: () => Category })
    @ManyToOne(() => Category, (category) => category.products)
    category: Category;

    @ApiProperty()
    @Column({ type: "integer", nullable: false })
    categoryId: number;

    @ApiProperty({ type: () => CategoryType })
    @ManyToOne(() => CategoryType, (categoryType) => categoryType.products)
    categoryType: CategoryType;

    @ApiProperty()
    @Column({ type: "integer", nullable: false })
    categoryTypeId: number;

    @ApiProperty({ type: () => CategorySubject })
    @ManyToOne(
        () => CategorySubject,
        (categorySubject) => categorySubject.products
    )
    categorySubject: CategorySubject;

    @ApiProperty()
    @Column({ type: "integer", nullable: false })
    categorySubjectId: number;

    @ApiProperty({ type: () => BasketItem })
    @OneToMany(() => BasketItem, (BasketItem) => BasketItem.product)
    basketItems: BasketItem[];

    @ApiProperty({ type: () => Comment })
    @OneToMany(() => Comment, (comment) => comment.product)
    comments: Comment[];

    @CreateDateColumn()
    createdAt: Date;
}
