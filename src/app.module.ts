import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CatsModule } from './cats/cats.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { RolesModule } from './roles/roles.module';
import { CuisinesModule } from './cuisines/cuisines.module';
import { RestaurantsModule } from './restaurants/restaurants.module';
import { RestaurantTypeModule } from './restaurant-type/restaurant-type.module';
import { CategoriesModule } from './categories/categories.module';
import { MenusModule } from './menus/menus.module';
import { TimeSlotsModule } from './time-slots/time-slots.module';
@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/kyo_book'),
    CatsModule,
    AuthModule,
    UsersModule,
    RolesModule,
    CuisinesModule,
    RestaurantsModule,
    RestaurantTypeModule,
    CategoriesModule,
    MenusModule,
    TimeSlotsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
