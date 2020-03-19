using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebSite.ViewModel
{
    public class PlasticoViewModel
    {
        public PlasticoViewModel()
        {
            SolicitudesViewModel = new SolicitudesViewModel();
            TipoSolicitudesViewModel= new TipoSolicitudesViewModel();
        }

        public string FechaDistrib { get; set; }
        public string FechaAltaPlastico { get; set; }
        public string EstadoFecha { get; set; }

        public decimal Reg_id { get; set; }
        public decimal Nro_BP { get; set; }
        public decimal Fecha_Alta_Plastico { get; set; }
        public decimal Suc_Radicacion { get; set; }
        public Nullable<decimal> Fecha_Distrib { get; set; }
        public Nullable<decimal> GAF { get; set; }
        public string Tipo_doc_Banco { get; set; }
        public Nullable<decimal> Nro_sol { get; set; }


        public decimal Plastico_nro { get; set; }
        public decimal Producto_id { get; set; }
        public string SubProducto_id { get; set; }
        public decimal Estado_id { get; set; }
        public System.DateTime Estado_Fecha { get; set; }
        public decimal Fecha_Embozado { get; set; }
        public decimal Suc_Stock { get; set; }
        public decimal Nro_doc { get; set; }
        public string Cliente_Razon { get; set; }
        public string BarCode_Pieza { get; set; }
        public string Señal_Alta_Masiva { get; set; }
        public decimal Fecha_import { get; set; }
        public decimal Id_embozo { get; set; }
        public decimal Nro_Cuenta_Plastico { get; set; }
        public decimal Fecha_Informe_ADDOC { get; set; }
        public string Motivo_Impresion { get; set; }
        public string Canal_origen { get; set; }
        public string Embozo_origen { get; set; }
        public string Mod_Entrega { get; set; }
        public string Permisionaria { get; set; }
        public Nullable<decimal> Suc_Destino { get; set; }
        public Nullable<decimal> Unid_Org_Id { get; set; }
        public SolicitudesViewModel SolicitudesViewModel { get; set; }
        public TipoSolicitudesViewModel TipoSolicitudesViewModel { get; set; }





    }
} 