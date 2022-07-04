import { ApiProperty } from "@nestjs/swagger";
import { Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Categoria } from "src/categorias/categoria.model";

@Table
export class Produto extends Model<Produto> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    primaryKey: true,
    allowNull: false,
  })
  idProduto;
  @ApiProperty()
  @ForeignKey(() => Categoria)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  idCategoria: number;

  @ApiProperty()
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  codigo: string;

  @ApiProperty()
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  nome: string;

  @ApiProperty()
  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  descricao: string;

  @ApiProperty()
  @Column({
    type: DataType.DECIMAL(10, 2),
    allowNull: false,
  })
  valor: number;

  @ApiProperty()
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  status: number;
}

