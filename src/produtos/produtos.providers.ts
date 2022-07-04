import { Produto } from "./produto.model";

export const produtoProviders = [
    {
        provide: 'PRODUTOS_REPOSITORY',
        useValue: Produto,
    },
];