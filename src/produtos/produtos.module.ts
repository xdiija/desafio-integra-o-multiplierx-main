/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { EstoquesService } from 'src/estoques/estoques.service';
import { Produto } from './produto.model';
import { ProdutosController } from './produtos.controller';
import { ProdutosService } from './produtos.service';
import { estoqueProviders } from '../estoques/estoques.providers';
import { produtoProviders } from './produtos.providers';


@Module({
  imports: [SequelizeModule.forFeature([Produto])],
  controllers: [ProdutosController],
  providers: [
    ProdutosService,
    EstoquesService,
    ...produtoProviders,
    ...estoqueProviders,
  ],
  exports: [SequelizeModule],
})
export class ProdutosModule {}
