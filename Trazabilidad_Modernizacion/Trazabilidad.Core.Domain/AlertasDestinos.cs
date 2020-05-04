//------------------------------------------------------------------------------
// <auto-generated>
//     Este código se generó a partir de una plantilla.
//
//     Los cambios manuales en este archivo pueden causar un comportamiento inesperado de la aplicación.
//     Los cambios manuales en este archivo se sobrescribirán si se regenera el código.
// </auto-generated>
//------------------------------------------------------------------------------

namespace Trazabilidad.Core.Domain
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;

    public partial class AlertasDestinos : BaseEntity
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public AlertasDestinos()
        {
            this.AlertasPlastico = new HashSet<AlertasPlastico>();
        }
         [Key]
        public decimal adeId { get; set; }
        public decimal ateId { get; set; }
        public Nullable<decimal> adeCodSucDest { get; set; }
        public string adeDescripcion { get; set; }
        public Nullable<decimal> adePosicion { get; set; }
        public Nullable<decimal> adePosicionCopia { get; set; }
        public Nullable<decimal> adeUnidadOrganizativa { get; set; }
    
        public virtual AlertasTiposEmail AlertasTiposEmail { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<AlertasPlastico> AlertasPlastico { get; set; }
    }
}
