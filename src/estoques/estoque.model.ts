import { Table, Column, Model, DataType, ForeignKey, BelongsTo, HasOne,
} from 'sequelize-typescript';
import { Produto } from 'src/produtos/produto.model'; 

const options = {
  modelName: 'Estoque',
  createdAt: false,
  indexes: [
    {
      fields: ['idProduto'],
    },
  ],
};

@Table
export class Estoque extends Model {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id;

  @ForeignKey(() => Produto)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    onDelete: 'CASCADE',
    unique: true,
  })
  idProduto: number;

  @Column({ defaultValue: 0, type: DataType.INTEGER })
  quantidade;

  @Column({ defaultValue: 0, type: DataType.INTEGER })
  reserva;

  @Column({ type: DataType.INTEGER })
  status;

  @BelongsTo(() => Produto)
  Produto: Produto;

  // @BelongsTo(() => produto, { foreignKey 'userId', as 'user'})
  // user: User;

  // @BelongsTo(() => produto)
  // produto: produto
}
