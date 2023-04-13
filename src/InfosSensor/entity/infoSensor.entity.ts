import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class InfoSensorEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    cliente_id: number;

    @Column()
    freezer_id: number;

    @Column()
    temp_atual: number;

    @Column()
    status_porta: string;

    @CreateDateColumn()
    createdAt: string;
}