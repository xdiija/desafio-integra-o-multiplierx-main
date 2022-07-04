import { categoria_backup } from './categoria-bak.model';

export const categoria_backup_Providers = [
    {
        provide: 'CATEGORIA_BACKUP_REPOSITORY',
        useValue: categoria_backup,
    },
];