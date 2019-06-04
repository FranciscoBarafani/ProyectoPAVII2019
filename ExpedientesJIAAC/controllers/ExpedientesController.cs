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
        private ExpedientesEntities db = new ExpedientesEntities();

        // GET: api/Expedientes
        public IQueryable<Expediente> GetExpedientes()
        {
            return db.Expedientes;
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

        // PUT: api/Expedientes/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutExpediente(int id, Expediente expediente)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != expediente.numeroExpediente)
            {
                return BadRequest();
            }

            db.Entry(expediente).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ExpedienteExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/Expedientes
        [ResponseType(typeof(Expediente))]
        public IHttpActionResult PostExpediente(Expediente expediente)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Expedientes.Add(expediente);

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateException)
            {
                if (ExpedienteExists(expediente.numeroExpediente))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("DefaultApi", new { id = expediente.numeroExpediente }, expediente);
        }

        // DELETE: api/Expedientes/5
        [ResponseType(typeof(Expediente))]
        public IHttpActionResult DeleteExpediente(int id)
        {
            Expediente expediente = db.Expedientes.Find(id);
            if (expediente == null)
            {
                return NotFound();
            }

            db.Expedientes.Remove(expediente);
            db.SaveChanges();

            return Ok(expediente);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool ExpedienteExists(int id)
        {
            return db.Expedientes.Count(e => e.numeroExpediente == id) > 0;
        }
    }
}