﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data.SqlClient;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;

namespace Datos
{
  public class GestorExpedientes
  {
    //Obtener todos los registros
    public static IEnumerable<Expediente> obtenerTodos(int numeroPagina, out int RegistrosTotal)
    {
      using (ExpedientesEntities1 db = new ExpedientesEntities1())
      {
        IQueryable<Expediente> consulta = db.Expedientes;
        consulta = consulta.Where(a => a.status == true);
        int RegistroDesde = (numeroPagina - 1) * 10;
        RegistrosTotal = consulta.Count();
        var Lista = consulta.OrderBy(a => a.numeroExpediente).Skip(RegistroDesde).Take(10).ToList();
        return Lista;

      }
    }

    //Grabar Registro
    public static void Grabar(Expediente DtoSel)
    {
      //Validar Campos -- TO DO 
      using (ExpedientesEntities1 db = new ExpedientesEntities1())
      {
        try
        {
          if (DtoSel.id != 0)
          {
            db.Entry(DtoSel).State = EntityState.Modified;
            db.SaveChanges();
          }
          else
          {
            db.Expedientes.Add(DtoSel);
            db.SaveChanges();
          }
        }
        catch (Exception ex)
        {
          if (ex.ToString().Contains("UK_Expediente_numeroExpediente"))
            throw new ApplicationException("Ya existe otro Expediente con ese numero");
          else
            throw;
        }
      }      
    }

    //Eliminar Registro // Baja Logica 
    public static void Eliminar(int idExpediente)
    {
      using (ExpedientesEntities1 db = new ExpedientesEntities1()) {
        db.Database.ExecuteSqlCommand("UPDATE Expedientes set status = 0 WHERE id = @id", new SqlParameter("@id", idExpediente));
          }
    }
  }
}
