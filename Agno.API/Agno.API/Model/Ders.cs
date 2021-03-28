using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Agno.API.Model
{
    public class Ders
    {
        public int Id { get; set; }
        public char DersTuru { get; set; }
        public string DersAdi { get; set; }
        public string DersKodu { get; set; }
        public byte DersKredisi { get; set; }
        
        public int YariyilId { get; set; } // foreign key

        public virtual Donem Donemi { get; set; }
    }
}
