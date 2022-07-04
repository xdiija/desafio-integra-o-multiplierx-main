import { Injectable, Inject } from '@nestjs/common';
import { Estoque } from './estoque.model'; 
import { Produto } from 'src/produtos/produto.model'; 

@Injectable()
export class EstoquesService {
  constructor(
    @Inject('ESTOQUE_REPOSITORY')
    private estoqueRepository: typeof Estoque,
  ) {}

  getCategoria() {
    return 'Hi service';
  }

  async saveEstoquedb(produto: Produto) {
    return this.estoqueRepository.create({
      idProduto: produto.id,
      idCategoria: 1,
      quantidade: 0,
      reserva: 0,
      status: produto.status,
    });
  }

  async findAll(): Promise<Estoque[]> {
    return this.estoqueRepository.findAll<Estoque>();
  }

  async getEstoqueById(id: number) {
    const categoria = this.estoqueRepository.findOne({
      where: {
        id: id,
      },
    });

    return categoria;
  }

  async update(id: number, NovoEstoque: any) {
    await this.estoqueRepository.update(NovoEstoque, {
      where: {
        id: id,
      },
    });
    const categoria = this.estoqueRepository.findOne({
      where: {
        id: id,
      },
    });

    if (categoria) {
      return categoria;
    }

    return 'Categoria não encontrada!';
  }

  async destroy(id: number) {
    const categoria = this.estoqueRepository.findOne({
      where: {
        id: id,
      },
    });

    await this.estoqueRepository.destroy({
      where: {
        id: id,
      },
    });

    return categoria;
  }
}
