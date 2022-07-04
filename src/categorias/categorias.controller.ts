import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CategoriasService } from './categorias.service';

@Controller('categorias')
export class CategoriasController {
    constructor(private categoriasService: CategoriasService) { }

    @Get(':id')
    getCategoriaController(@Param('id') id: number) {
        if (id) {
            return this.categoriasService.getCategoriaById(id);
        }
    }

    @Get()
    getCategoriasController() {
        return this.categoriasService.findAll()
    }

    @Post()
    saveCategoria(@Body() newcategoria) {
        return this.categoriasService.saveCategoria(newcategoria)
    }

    @Put(':id')
    updateCategoria(@Param() params, @Body() categoria: any) {
        return this.categoriasService.update(params.id, categoria)
    }

    @Delete(':id')
    DeleteCategoria(@Param('id') id: number) {
        if (id) {
            return this.categoriasService.destroy(id);
        }
    }

}
