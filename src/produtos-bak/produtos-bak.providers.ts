import { produto_backup } from "./produto-bak.model"; 

export const produtos_backup_Providers = [
  {
    provide: 'PRODUTOS_BACKUP_REPOSITORY',
    useValue: produto_backup,
  },
];
