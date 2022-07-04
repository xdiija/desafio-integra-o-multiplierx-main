import { Inject, Injectable } from '@nestjs/common';
import { InjectConnection } from '@nestjs/sequelize';
import { Sequelize } from 'sequelize-typescript';
import { produto_backup } from './produto-bak.model'; 

@Injectable()
export class ProdutosBackupService {
  // CATEGORIA_BACKUP_REPOSITORY
  constructor(
    @Inject('PRODUTOS_BACKUP_REPOSITORY')
    private produtosBackupRepository: typeof produto_backup,


  ) {}
}
