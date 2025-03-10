import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { CategoriesProductModule } from './categories-product/categories-product.module';
import { CategoryModule } from './category/category.module';
import { OrderProductModule } from './order-product/order-product.module';
import { OrderModule } from './order/order.module';
import { PaymentsModule } from './payments/payments.module';
import { ProductSliderImageModule } from './product-slider-image/product-slider-image.module';
import { ProductsModule } from './products/products.module';
import { UsersModule } from './users/users.module';
import { CustomerModule } from './customer/customer.module';
import { AdminsModule } from './admins/admins.module';

@Module({
  imports: [
    
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT, 10),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      autoLoadModels: true,
    }),

    ProductsModule,
    CategoryModule,
    UsersModule,
    OrderModule,
    CategoriesProductModule,
    ProductSliderImageModule,
    OrderProductModule,
    PaymentsModule,
    AuthModule,
    CustomerModule,
    AdminsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
