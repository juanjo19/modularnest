import { Module } from '@nestjs/common';
import { CustomerController } from './controllers/customers.controller';
import { UsersController } from './controllers/users.controller';
import { CustomersService } from './services/customers.service';
import { UsersService } from './services/users.service';

import { ProductsModule } from '../products/products.module';

@Module({
  controllers: [CustomerController, UsersController],
  providers: [CustomersService, UsersService],
  imports: [ProductsModule],
})
export class UsersModule {}
