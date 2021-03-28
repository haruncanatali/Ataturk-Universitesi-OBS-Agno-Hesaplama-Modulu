using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Agno.API.Model
{
    public class Donem
    {
        public Donem()
        {
            Dersler = new List<Ders>();
        }

        public int Id { get; set; }
        public string YariyilAdi { get; set; }

        public virtual ICollection<Ders> Dersler { get; set; }
    }
}
