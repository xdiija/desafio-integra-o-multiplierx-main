import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { EstoquesService } from "src/estoques/estoques.service";
import { Produto } from "./produto.model";
import { ProdutosService } from "./produtos.service";

@Controller('produtos')
export class ProdutosController {
    constructor(private produtosService: ProdutosService,
        private estoquesService: EstoquesService) {}

    @Get()
    async obterTodos(): Promise<Produto[]> {
        return this.produtosService.obterTodos();
    }

    @Get(':id')
    async obterUm(@Param() params): Promise<Produto> {
        return this.produtosService.obterUm(params.id)
    }

    @Post()
    async criar(@Body() produto: Produto) {
        this.produtosService.criar(produto)
    }

    @Put()
    async alterar(@Body() produto: Produto): Promise<[number, Produto[]]> {
        return this.produtosService.alterar(produto)
    }

    @Delete(':id')
    async apagar(@Param() params) {
        this.produtosService.apagar(params.id)
    }
}