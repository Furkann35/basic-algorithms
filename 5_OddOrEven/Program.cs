using System;

namespace P005_OddOrEven
{
    class Program
    {
        static void Main(string[] args)
        {
            System.Console.WriteLine("Bir sayı giriniz");
            int number = Convert.ToInt32(Console.ReadLine());
            string result;

            if (number % 2 == 0)
            {
                result = "Çift";

            }
            else
            {
                result = "Tek";
            }

            System.Console.WriteLine("Girilen sayı " + result);
        }
    }
}
