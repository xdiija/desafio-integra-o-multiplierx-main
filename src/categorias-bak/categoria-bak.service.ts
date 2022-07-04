import { Inject, Injectable } from '@nestjs/common';
import { InjectConnection } from '@nestjs/sequelize';
import { Sequelize } from 'sequelize-typescript';
import { categoria_backup } from './categoria-bak.model'

@Injectable()
export class CategoriaBackupService {
  // CATEGORIA_BACKUP_REPOSITORY
  constructor(
    @Inject('CATEGORIA_BACKUP_REPOSITORY')
    private categoriabackupRepository: typeof categoria_backup,

  ) {}
}
