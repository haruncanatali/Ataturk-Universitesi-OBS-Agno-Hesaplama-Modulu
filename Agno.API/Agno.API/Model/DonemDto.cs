using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace Agno.API.Model
{
    public class DonemDto
    {
        public List<Donem> Donemler { get; set; }
        public SqlBaglantisi SqlConn = new SqlBaglantisi();

        public DonemDto()
        {
            Donemler = new List<Donem>();
        }

        public List<Donem> DonemDondur()
        {
            SqlCommand komut = new SqlCommand("Select * from Tbl_Donemler",SqlConn.BaglantiDondur());
            SqlDataReader okuyucu = komut.ExecuteReader();
            while (okuyucu.Read())
            {
                Donemler.Add(new Donem
                {
                    Id = int.Parse(okuyucu[0].ToString()),
                    YariyilAdi = okuyucu[1].ToString(),
                    Dersler = DersleriDondur(int.Parse(okuyucu[0].ToString()))
                });
            }

            SqlConn.BaglantiDondur().Close();

            return Donemler;
        }

        public List<Ders> DersleriDondur(int id=-1)
        {
            List<Ders> Dersler = new List<Ders>();

            SqlCommand komut = new SqlCommand("select * from Tbl_Dersler where YariyilId=@p1", SqlConn.BaglantiDondur());
            komut.Parameters.AddWithValue("@p1",id);

            SqlDataReader okuyucu = komut.ExecuteReader();

            while (okuyucu.Read())
            {
                Dersler.Add(new Ders
                {
                    Id = int.Parse(okuyucu[0].ToString()),
                    DersTuru = char.Parse(okuyucu[1].ToString()),
                    DersAdi = okuyucu[2].ToString(),
                    DersKodu = okuyucu[3].ToString(),
                    DersKredisi = byte.Parse(okuyucu[4].ToString()),
                    YariyilId = int.Parse(okuyucu[5].ToString())
                });
            }
            return Dersler;
        }
    }
}
