import { EstoquesService } from './estoques/estoques.service';
import { ProdutosModule } from './produtos/produtos.module';
import { ProdutosService } from './produtos/produtos.service';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProdutosController } from './produtos/produtos.controller';
import { SequelizeModule } from '@nestjs/sequelize/dist/sequelize.module';
import { Produto } from './produtos/produto.model';
import { ConfigModule } from '@nestjs/config';
import { categoriaProviders } from './categorias/categoria.providers';
import { Categoria } from './categorias/categoria.model';
import { Estoque } from './estoques/estoque.model';
import { categoria_backup } from './categorias-bak/categoria-bak.model';
import { estoques_backup } from './estoques-bak/estoques-bak.model';
import { produto_backup } from './produtos-bak/produto-bak.model';
import { CategoriaBackupModule } from './categorias-bak/categoria-bak.module';
import { EstoquesBackupModule } from './estoques-bak/estoques-bak.module';
import { ProdutosBackupModule } from './produtos-bak/produtos-bak.module';
import { CategoriasModule } from './categorias/categorias.module';
import { EstoquesModule } from './estoques/estoques.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    ProdutosModule, CategoriasModule, EstoquesModule, 
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      username: process.env.USUARIO_BANCO_DADOS,
      password: process.env.SENHA_BANCO_DADOS,
      database: 'desafio_sequelize_mysql',
      autoLoadModels: true,
      synchronize: true,
    }),
    SequelizeModule.forFeature([Produto, Categoria, Estoque]),

    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      port: 3310,
      username: process.env.USUARIO_BANCO_DADOS,
      password: process.env.SENHA_BANCO_DADOS,
      database: 'desafio_sequelize_postgres',
      models: [categoria_backup, estoques_backup, produto_backup],
      synchronize: true,
    }),

    CategoriaBackupModule,

    EstoquesBackupModule,

    ProdutosBackupModule,
  ],
  controllers: [AppController, ProdutosController],
  providers: [
    EstoquesService,
    AppService,
    ProdutosService,
    ...categoriaProviders,
  ],
})
export class AppModule {}
