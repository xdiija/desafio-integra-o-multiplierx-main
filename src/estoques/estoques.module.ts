import { Module } from '@nestjs/common';
import { EstoquesController } from './estoques.controller';
import { EstoquesService } from './estoques.service';
import { estoqueProviders } from './estoques.providers';

@Module({

  controllers: [EstoquesController],
  providers: [EstoquesService,
    ...estoqueProviders],
})
export class EstoquesModule { }
