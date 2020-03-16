using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebSite.ViewModel
{
    public class SolicitudesViewModel
    {

        public Nullable<decimal> nro_sol_envio_masiva_SO { get; set; }
        public Nullable<decimal> solPromotorDocNumero { get; set; }
        public Nullable<int> grupo_cartera_cod { get; set; }
        public Nullable<int> linea_cod { get; set; }

        public string SolFecha { get; set; }


        public decimal solId { get; set; }
        public Nullable<int> tsoId { get; set; }

        public Nullable<int> sucursal_BCO_cod { get; set; }
        public Nullable<int> sucursal_SO_cod { get; set; }
        public string producto_Marca_Cod { get; set; }
        public Nullable<decimal> producto_SO_Cod { get; set; }
        public Nullable<int> mer_id { get; set; }
        public string Cuenta_socio { get; set; }
        public Nullable<bool> solEmpleado { get; set; }
        public string solObservaciones { get; set; }
        public Nullable<int> canId { get; set; }
        public Nullable<int> canCodigo { get; set; }
        public string Titular_DocumentoTipo_Bco_cod { get; set; }
        public Nullable<int> Titular_DocumentoTipo_SO_cod { get; set; }
        public Nullable<decimal> Titular_DocumentoNumero { get; set; }
        public Nullable<System.DateTime> estFecha { get; set; }
        public Nullable<int> estId { get; set; }
        public Nullable<decimal> sseID { get; set; }
        public string solCodigoBarra { get; set; }
        public Nullable<System.DateTime> solFecha { get; set; }
        public Nullable<int> solPromotorSucursal { get; set; }
        public Nullable<int> solPromotorSistema { get; set; }
        public Nullable<decimal> solPromotorCuenta { get; set; }
        public Nullable<int> solPromotorDocTipo { get; set; }

        public Nullable<int> IdTarjetaOtroResumen { get; set; }
        public Nullable<decimal> SolLimiteOtroResumen { get; set; }
        public Nullable<int> SolOtroResumenPremium { get; set; }
        public Nullable<decimal> Aseg_Id_SO { get; set; }
        public Nullable<decimal> Aseg_Id_desempleo_SO { get; set; }
        public string sis_cod { get; set; }
        public Nullable<decimal> nro_BP { get; set; }
        public Nullable<decimal> tipo_origen_SO { get; set; }
        public Nullable<int> modo_SO { get; set; }
        public Nullable<int> Punto_Venta_SO { get; set; }
        public Nullable<int> estado_sol_SO { get; set; }

        public Nullable<int> Tipo_de_Alta_SO { get; set; }
        public Nullable<decimal> Grupo_Afinidad_cod_SO { get; set; }

        public string Forma_Pago { get; set; }
        public string Tipo_Pago { get; set; }
        public string Tipo_Cuenta_Debito_BCO { get; set; }
        public string Tipo_Cuenta_Debito_SO { get; set; }
        public Nullable<decimal> Suc_cuenta_debito_BCO { get; set; }
        public Nullable<decimal> Suc_cuenta_debito_SO { get; set; }
        public Nullable<decimal> cuenta_Debito { get; set; }
        public Nullable<decimal> importe_Limite_Compra { get; set; }
        public Nullable<decimal> Mod_Bonificacion_SO { get; set; }
        public string Modelo_Limite_SO { get; set; }
        public Nullable<decimal> importe_Limite_credito { get; set; }
        public Nullable<decimal> importe_precalificacion { get; set; }
        public string Promotor_nombre { get; set; }
        public Nullable<int> cartera_SO { get; set; }
        public Nullable<decimal> margen_utilizado { get; set; }
        public Nullable<int> suc_Id_Almacena { get; set; }
        public string nCampania { get; set; }
        public Nullable<decimal> esHijoDe { get; set; }
        public string Empresa_ID { get; set; }
        public Nullable<int> tipoResumen { get; set; }
        public Nullable<int> braille { get; set; }
        public Nullable<int> IdSolicitudeExterna { get; set; }
        
        public  string  Cartera { get; set; }
        public string Mercado { get; set; }
    }
}