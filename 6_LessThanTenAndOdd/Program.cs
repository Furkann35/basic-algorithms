using System;

namespace P006_LessThanTenAndOdd
{
    class Program
    {
        static void Main(string[] args)
        {
            System.Console.WriteLine("Bir sayı giriniz:");
            int a = Convert.ToInt32(Console.ReadLine());

            if (a<10 && a % 2 == 1 )
            {
                System.Console.WriteLine("{0} 10'dan küçüktür ve tektir",a);
            }
            else
            {
                System.Console.WriteLine("{0} 10'dan büyüktür veya çifttir",a);
            }
        }
    }
}
