import { Estoque } from "./estoque.model"; 

export const estoqueProviders = [
    {
        provide: 'ESTOQUE_REPOSITORY',
        useValue: Estoque,
    },
];