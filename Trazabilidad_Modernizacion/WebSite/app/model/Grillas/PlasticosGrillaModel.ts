export class PlasticosGrillaModel {
    plasticos: Array<PlasticoModel> = new Array<PlasticoModel>();
    cantidad_total_plasticos: number;
}

export class PlasticoModel {
    public reg_id: number;
    public plastico_nro: number;
    public apellidoNombre: string;
    public documento: string;
    public cuenta: number;
    public producto: string;
    public fecha_estado: string;
    public estado: string;
    public motivo_impresion: string;
    public modalidad_entrega: string;
    public canal_origen: string;
    public nro_acuse: string;
}