import { Test, TestingModule } from '@nestjs/testing';
import { RestaurantTypeController } from './restaurant-type.controller';

describe('RestaurantType Controller', () => {
  let controller: RestaurantTypeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RestaurantTypeController],
    }).compile();

    controller = module.get<RestaurantTypeController>(RestaurantTypeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
