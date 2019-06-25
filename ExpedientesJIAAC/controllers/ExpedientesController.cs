using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using Datos;

namespace ExpedientesJIAAC.controllers
{
    public class ExpedientesController : ApiController
    {
        private ExpedientesEntities1 db = new ExpedientesEntities1();

    // GET: api/Expedientes

    public IHttpActionResult GetExpedientes(int numeroPagina = 1)
    {
      int RegistrosTotal;
      var Lista = Datos.GestorExpedientes.obtenerTodos(numeroPagina, out RegistrosTotal);
      return Ok(new { Lista = Lista, RegistrosTotal = RegistrosTotal });
    }



        // GET: api/Expedientes/5
        [ResponseType(typeof(Expediente))]
        public IHttpActionResult GetExpediente(int id)
        {
            Expediente expediente = db.Expedientes.Find(id);
            if (expediente == null)
            {
                return NotFound();
            }

            return Ok(expediente);
        }

       
        // POST: api/Expedientes
        [ResponseType(typeof(Expediente))]
        public IHttpActionResult PostExpediente(Expediente expediente)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            Datos.GestorExpedientes.Grabar(expediente);
            return CreatedAtRoute("DefaultApi", new { id = expediente.numeroExpediente }, expediente);
        }

    // DELETE: api/Expedientes/5
    [ResponseType(typeof(Expediente))]
    public IHttpActionResult DeleteExpediente(int id)
    {
      Datos.GestorExpedientes.Eliminar(id);
      return StatusCode(HttpStatusCode.NoContent);
    }
    }
}