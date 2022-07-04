import { Module } from '@nestjs/common';
import { CategoriasController } from './categorias.controller';
import { CategoriasService } from './categorias.service';
import { Categoria } from './categoria.model';
import { Sequelize } from 'sequelize-typescript';
import { getConnectionToken, SequelizeModule } from '@nestjs/sequelize';
import { categoriaProviders } from './categoria.providers';
import { TaskService } from '../task.service';
import { categoria_backup_Providers } from 'src/categorias-bak/categoria-bak.providers'; 
import { estoques_backup_Providers } from 'src/estoques-bak/estoques-bak.providers'; 
import { estoqueProviders } from 'src/estoques/estoques.providers';
import { produtoProviders } from 'src/produtos/produtos.providers'; 

@Module({
    imports: [
        SequelizeModule.forFeature([Categoria]),

    ],
    controllers: [CategoriasController],
    providers: [CategoriasService,
        ...categoriaProviders,
        ...categoria_backup_Providers,
        ...estoques_backup_Providers,
        ...estoqueProviders,
        ...estoques_backup_Providers,
        ...produtoProviders,
        TaskService,

    ],


})
export class CategoriasModule { }
