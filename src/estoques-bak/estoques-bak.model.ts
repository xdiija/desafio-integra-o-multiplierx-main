import { Table, Column, Model, DataType, ForeignKey, BelongsTo, HasOne } from 'sequelize-typescript';

@Table
export class estoques_backup extends Model {
    @Column({ type: DataType.INTEGER, unique: true, primaryKey: true })
    id

    @Column({
        type: DataType.INTEGER,
        allowNull: false,
        unique: true
    })
    idProduto: number

    @Column({ defaultValue: 0, type: DataType.INTEGER })
    quantidade

    @Column({ defaultValue: 0, type: DataType.INTEGER })
    reserva

    @Column({ type: DataType.INTEGER })
    status

}

