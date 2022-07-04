import { Module } from '@nestjs/common';
import { produtos_backup_Providers } from './produtos-bak.providers'; 
import { ProdutosBackupService } from './produtos-bak.service-'; 

@Module({
  providers: [ProdutosBackupService, ...produtos_backup_Providers],
})
export class ProdutosBackupModule {}
