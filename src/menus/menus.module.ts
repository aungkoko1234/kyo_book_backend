import { MenuSchema } from './../schemas/menu.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { MenusController } from './menus.controller';
import { MenusService } from './menus.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Menu', schema: MenuSchema }])],
  controllers: [MenusController],
  providers: [MenusService]
})
export class MenusModule {}
