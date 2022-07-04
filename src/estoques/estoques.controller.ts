import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put } from '@nestjs/common';
import { EstoquesService } from './estoques.service';
import { Estoque } from './estoque.model'; 


@Controller('produtos')
export class EstoquesController {
    constructor(private estoquesService: EstoquesService) { }

    @Get(':id/estoque')
    getEstoqueController(@Param('id') id: number) {
        if (id) {
            return this.estoquesService.getEstoqueById(id);
        }
    }

    @Post()
    saveEstoque(@Body() newEstoque: any) {
        console.log(newEstoque)

        return this.estoquesService.saveEstoquedb(newEstoque)
    }

    @Put(':id/estoque')
    updateEstoque(@Param() params, @Body() estoque: any) {
        return this.estoquesService.update(params.id, estoque)
    }

    @Delete(':id/estoque')
    @HttpCode(501)
    DeleteEstoque() {
        return "Não se pode deletar um estoque"
    }

}
