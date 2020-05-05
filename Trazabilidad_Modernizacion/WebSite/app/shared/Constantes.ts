import { SeguimientoServices } from "../services/seguimiento.service";

export class Constantes {
     public static URL_BASE = ""; 
    //Consultas;

    //Seguimiento de solicitudes

    //Parametros
    public static URL_OBTENER_MARCAS = Constantes.URL_BASE + "Parametros/ObtenerMarcas";
    public static URL_OBTENER_ESTADOS_SOLICITUD = Constantes.URL_BASE + "Parametros/ObtenerEstados";
    public static URL_OBTENER_PRODUCTOS = Constantes.URL_BASE + "Parametros/ObtenerProductos";
    public static URL_OBTENER_SUCURSAL_DESCRIPCION = Constantes.URL_BASE + "Parametros/ObtenerDescripcionSucursal"
    public static URL_OBTENER_GAF = Constantes.URL_BASE + "Parametros/ObtenerGruposAfinidad"
    public static URL_OBTENER_CONVERSION_POR_CONCEPTO = Constantes.URL_BASE + "Parametros/ObtenerConversionPorConcepto"
    public static URL_OBTENER_MODALIDADES_ENTREGA = Constantes.URL_BASE + "Parametros/ObtenerModalidadesEntrega"
    //Consulta
    public static URL_OBTENER_GRILLA_PLASTICOS = Constantes.URL_BASE + "Consultas/ObtenerGrillaPlasticosModel"
    //Alta de Titular

    //Alta de adicionales

    //Aumento de Calificacion

    //Aumento de limite de Compras

    //+Operaciones

    //Baja de Cuentas


    //Tipo de Resumen


    // Modificacion Forma de Pago


    //Modificacion de Grupo de Cierre

    // Reimpresion de Tarjetas

    // No Renovacion de Tarjetas


    // Baja Tarjetas


    //Modulos


    //Titulos ----------------------------------------------



    // Id de Tipos de Solicitud



    //Detalles plasticos 
    public static URL_OBTENER_DETALLES_PLASTICOS = Constantes.URL_BASE + "DetallePlastico/ObtenerDetallesplastico"
    //plastico consulta
    public static URL_OBTENER_SOLICITUDES_PLASTICOS = Constantes.URL_BASE + "ConsultasPlasticos/ObtenerListaPlastico"
    public static URL_OBTENER_FILTROS_PLASTICOS = Constantes.URL_BASE + "ConsultasPlasticos/FiltrosPlasticos"
    public static URL_OBTENER_PAGINADOR_PLASTICOS = Constantes.URL_BASE + "ConsultasPlasticos/ObtenerInfoPaginacion"
    public static URL_OBTENER_COMBOS_PLASTICOS = Constantes.URL_BASE + "ConsultasPlasticos/CombosPlastico"
    public static URL_OBTENER_COMBOS_PLASTICOS_MARCA = Constantes.URL_BASE + "ConsultasPlasticos/CombosPlasticoMarca"
    public static URL_OBTENER_COMBOS_PLASTICOS_PRODUCTO = Constantes.URL_BASE + "ConsultasPlasticos/CombosPlasticoProducto"
    public static URL_OBTENER_COMBOS_PLASTICOS_ESTADOS = Constantes.URL_BASE + "ConsultasPlasticos/CombosPlasticoEstados"


   //Seguimiento


    public static URL_OBTENER_SEGUIMIENTO = Constantes.URL_BASE + "Seguimiento/ObtenerSeguimiento"
    public static URL_OBTENER_OBTENERNRMTARJETA = Constantes.URL_BASE + "Seguimiento/ObtenerNroTarjeta"
    
}