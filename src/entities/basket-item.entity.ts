import { ApiProperty } from "@nestjsx/crud/lib/crud";
import {
    Column,
    CreateDateColumn,
    Entity,
    ManyToOne, PrimaryGeneratedColumn
} from "typeorm";
import { Product } from "./product.entity";

@Entity("basket-items")
export class BasketItem {
    @ApiProperty()
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty()
    @Column({ type: "integer", nullable: false })
    userId: number;

    @ApiProperty()
    @Column({ type: "integer", nullable: false })
    productId: number;

    @ApiProperty()
    @ManyToOne(() => Product, (product) => product.basketItems)
    product: Product;

    @CreateDateColumn()
    createdAt: Date;
}
