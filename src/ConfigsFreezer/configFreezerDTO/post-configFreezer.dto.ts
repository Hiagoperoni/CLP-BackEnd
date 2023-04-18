import { IsNumber } from "class-validator";

export class PostConfigFreezerDTO {

    @IsNumber()
    cliente_id: number;

    @IsNumber()
    freezer_id: number;

    @IsNumber()
    temp_padrao: number;

    @IsNumber()
    temp_margem_frio: number;

    @IsNumber()
    temp_margem_quente: number;

    @IsNumber()
    porta_tempo: number;

}