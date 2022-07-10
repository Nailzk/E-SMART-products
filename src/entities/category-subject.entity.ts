import { ApiProperty } from "@nestjsx/crud/lib/crud";
import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { CategoryType } from "./category-type.entity";
import { Product } from "./product.entity";

@Entity("category_subjects")
export class CategorySubject {
    @ApiProperty()
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty()
    @Column({ type: "varchar", length: 255, nullable: false })
    name: string;

    @ApiProperty()
    @OneToMany(() => Product, (product) => product.categorySubject)
    products: Product[];

    @ApiProperty({ type: () => CategoryType })
    @ManyToOne(() => CategoryType, (categoryType) => categoryType.categorySubject)
    categoryType: CategoryType;

    @ApiProperty()
    @Column({ type: "integer", nullable: false })
    categoryTypeId: number;

    @CreateDateColumn()
    createdAt: Date;
}
