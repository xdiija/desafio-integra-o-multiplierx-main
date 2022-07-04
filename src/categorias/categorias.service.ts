import { Injectable, NotFoundException, Inject } from '@nestjs/common';
import { InjectConnection } from '@nestjs/sequelize';
import { Sequelize } from 'sequelize-typescript';
import { Categoria } from './categoria.model';  

@Injectable()
export class CategoriasService {
    constructor(
        @Inject('CATEGORIA_REPOSITORY')
        private categoriaRepository: typeof Categoria,

       
    ) { }

    async findAll(): Promise<Categoria[]> {
        return this.categoriaRepository.findAll<Categoria>();
    }


    async saveCategoria(categoria: any): Promise<Categoria> {
        return this.categoriaRepository.create(categoria)
    }

    async getCategoriaById(id: number) {
        const categoria = this.categoriaRepository.findOne({
            where: {
                id: id
            }
        });

        return Categoria

    }

    async update(id: number, NovaCategoria: Categoria): Promise<any> {
        await this.categoriaRepository.update(NovaCategoria, {
            where: {
                id: id
            }
        })
        const categoria = this.categoriaRepository.findOne({
            where: {
                id: id
            }
        });

        if (categoria) {
            return Categoria
        }

        return "Categoria não encontrada!"

    }

    async destroy(id: number) {

        const categoria = this.categoriaRepository.findOne({
            where: {
                id: id
            }
        });

        await this.categoriaRepository.destroy({
            where: {
                id: id
            }
        })


        return Categoria
    }

}
