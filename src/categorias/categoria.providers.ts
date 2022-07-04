import { Categoria } from "./categoria.model"; 

export const categoriaProviders = [
    {
        provide: 'CATEGORIA_REPOSITORY',
        useValue: Categoria,
    },
];