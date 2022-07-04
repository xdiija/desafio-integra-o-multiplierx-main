import { Module } from '@nestjs/common';
import { estoqueProviders } from 'src/estoques/estoques.providers';
import { EstoquesBackupService } from './estoques-bak.service';
import { estoques_backup_Providers } from './estoques-bak.providers'
import { TaskService } from 'src/task.service';
import { categoriaProviders } from 'src/categorias/categoria.providers';
import { categoria_backup_Providers } from 'src/categorias-bak/categoria-bak.providers'; 

@Module({
  providers: [EstoquesBackupService,
    ...estoques_backup_Providers,
    ...estoqueProviders,
    ...categoriaProviders,
    ...categoria_backup_Providers
  ]



  // providers: [CategoriaBackupService,
  //   ...categoria_backup_Providers,
  //   ...categoriaProviders,
  //   TaskService,]
})
export class EstoquesBackupModule { }
