import { Table, Column, Model, DataType, HasMany, } from 'sequelize-typescript';
import { Produto } from 'src/produtos/produto.model'; 
@Table
export class categoria_backup extends Model {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id;

  @Column
  codigo: string;

  @Column
  titulo: string;

  @Column
  status: string;

  @HasMany(() => Produto)
  produto: Produto[];
}

