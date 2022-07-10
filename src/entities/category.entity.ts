import { ApiProperty } from "@nestjsx/crud/lib/crud";
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { CategoryType } from "./category-type.entity";
import { Product } from "./product.entity";

@Entity("categories")
export class Category {
    @ApiProperty()
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty()
    @Column({ type: "varchar", length: 255, nullable: false })
    name: string;

    @ApiProperty()
    @OneToMany(() => Product, (product) => product.category)
    products: Product[];

    @ApiProperty({ type: () => CategoryType })
    @OneToMany(() => CategoryType, (categoryType) => categoryType.category)
    categoryType: CategoryType[];

    @CreateDateColumn()
    createdAt: Date;
}
