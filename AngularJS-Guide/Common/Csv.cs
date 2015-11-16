using CsvHelper;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;

namespace AngularJS_Guide.Common
{
    public static class Csv
    {
        public static IEnumerable<T> Read<T>(Stream stream, Encoding encoding)
        {
            using (var streamReader = new StreamReader(stream, encoding))
            {
                var csvReader = new CsvReader(streamReader);

                return csvReader.GetRecords<T>().ToArray();
            }
        }
    }
}