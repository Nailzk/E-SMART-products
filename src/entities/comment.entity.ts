import { ApiProperty } from "@nestjsx/crud/lib/crud";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Product } from "./product.entity";

@Entity("comments")
export class Comment {
    @ApiProperty()
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty()
    @Column({ type: "integer", nullable: false })
    userId: number;

    @ApiProperty()
    @Column({ type: "varchar", length: 255, nullable: false })
    name: string;
    
    @ApiProperty()
    @Column("simple-array", { array: true, default: [] })
    photoBase64s: string[];

    @ApiProperty()
    @Column({ type: "text", nullable: true })
    description: string;

    @ApiProperty({ type: () => Product })
    @ManyToOne(() => Product, (product) => product.comments)
    product: Product;

    @ApiProperty()
    @Column({ type: "integer", nullable: false })
    productId: number;
}
