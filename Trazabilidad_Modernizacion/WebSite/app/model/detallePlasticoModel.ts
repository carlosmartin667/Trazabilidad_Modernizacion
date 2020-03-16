import { TipoSolicitudesmodel } from "./TipoSolicitudesmodel";
import { SolicitudesModel } from "./SolicitudesModel";
export class DetallePlasticoModel {
    constructor() {
        this.SolicitudesViewModel = new SolicitudesModel;
        this.TipoSolicitudesViewModel = new TipoSolicitudesmodel;
    }
    public Reg_id: number;
    public Nro_BP: number;
    public Fecha_Alta_Plastico: number;
    public Suc_Radicacion: number;
    public Tipo_doc_Banco: string;
    public FechaDistrib: string;
    public FechaAltaPlastico: string;
    public Plastico_nro: number;
    public Producto_id: number;
    public SubProducto_id: string;
    public Estado_id: number;
    public Fecha_Embozado: number;
    public Suc_Stock: number;
    public Nro_doc: number;
    public Cliente_Razon: string;
    public BarCode_Pieza: string;
    public Señal_Alta_Masiva: string;
    public Fecha_import: number;
    public Id_embozo: number;
    public Nro_Cuenta_Plastico: number;
    public Fecha_Informe_ADDOC: number;
    public Motivo_Impresion: string;
    public Canal_origen: string;
    public Embozo_origen: string;
    public Mod_Entrega: string;
    public Permisionaria: string;
    public Fecha_Distrib: number;
    public GAF: number;
    public Nro_sol: number;
    public Estado_Fecha: string;
    public Suc_Destino: number;
    public Unid_Org_Id: number;
    public SolicitudesViewModel: SolicitudesModel;
    public TipoSolicitudesViewModel: TipoSolicitudesmodel;
}