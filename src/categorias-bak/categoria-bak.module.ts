import { Module } from '@nestjs/common';
import { CategoriaBackupService } from './categoria-bak.service';
import { categoria_backup_Providers } from './categoria-bak.providers'
import { categoriaProviders } from 'src/categorias/categoria.providers';
import { estoques_backup_Providers } from 'src/estoques-bak/estoques-bak.providers';
import { estoqueProviders } from 'src/estoques/estoques.providers';
@Module({
  providers: [CategoriaBackupService,
    ...categoria_backup_Providers,
    ...categoriaProviders,
    ...estoques_backup_Providers,
    ...estoqueProviders,
  ]
})
export class CategoriaBackupModule { }
