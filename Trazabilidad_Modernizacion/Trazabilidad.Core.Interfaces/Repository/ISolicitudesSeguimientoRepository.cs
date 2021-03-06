﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Trazabilidad.Core.Domain;

namespace Trazabilidad.Core.Interfaces.Repository
{
    public interface ISolicitudesSeguimientoRepository : IBaseRepository<Solicitudes_Seguimiento>
    {
        List<Solicitudes_Seguimiento> ObtenerSeguimiento( int solId);
        Solicitudes_Seguimiento AgrgarSolicitudesSeguimiento(Solicitudes_Seguimiento solicitudes_Seguimiento);
    }

}
