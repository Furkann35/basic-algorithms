using System;

namespace P001_RectangleArea
{
    class Program
    {
        // diktörgende alan hesaplama
        static void Main(string[] args)
        {
            int a;
            int b;
            
            System.Console.WriteLine("Birinci sayıyı girin");
            a = Convert.ToInt32(Console.ReadLine());
            System.Console.WriteLine("İkinci sayıyı girin");
            b = Convert.ToInt32(Console.ReadLine());


            int c = a * b;
  
  
            Console.WriteLine("Alan:" + c);

        }
    }
}
