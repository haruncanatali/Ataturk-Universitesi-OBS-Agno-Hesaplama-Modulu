using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace Agno.API.Model
{
    public class SqlBaglantisi
    {
        public SqlConnection BaglantiDondur()
        {
            SqlConnection connection = new SqlConnection(@"Data Source=DESKTOP-SL1S3RQ\SQLEXPRESS;Initial Catalog=DboAgno;Integrated Security=True");
            connection.Open();
            return connection;
        }
    }
}
