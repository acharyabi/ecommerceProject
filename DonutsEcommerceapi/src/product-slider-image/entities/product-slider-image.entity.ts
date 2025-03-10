import {
  ForeignKey,
  PrimaryKey,
  Column,
  Table,
  Model,
  AutoIncrement,
  DataType,
  BelongsTo,
} from 'sequelize-typescript';
import { Product } from 'src/products/entities/product.entity';

/**
 * Entity representing a product slider image in the database
 * Maps to the 'productSliderImages' table
 */
@Table({ tableName: 'productSliderImages' })
export class ProductSliderImage extends Model<ProductSliderImage> {
  /**
   * Primary key identifier for the slider image
   * Auto-incremented integer value
   */
  @PrimaryKey
  @AutoIncrement
  @Column({
    type: DataType.INTEGER,
  })
  id: number;
  /**
   * URL or path to the slider image file
   */
  @Column({
    type: DataType.STRING,
  })
  image: string;
  /**
   * Alternative text for the image for accessibility
   */
  @Column({
    type: DataType.STRING,
  })
  altText: string;

  /**
   * Foreign key reference to the associated product
   * Cannot be null as each slider image must belong to a product
   */
  @ForeignKey(() => Product)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  product_id: number;

  /**
   * Relationship to the Product entity
   * Defines a many-to-one relationship between slider images and products
   */
  @BelongsTo(() => Product)
  product: Product;
}
