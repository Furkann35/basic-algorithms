using System;

namespace P008_SumOfNumbers
{
    class Program
    {
        static void Main(string[] args)
        {
            int number;
            int sum = 0;


            do
            {
                System.Console.WriteLine("Bir sayı giriniz");
                number = Convert.ToInt32(Console.ReadLine());
                if (number != -1)
                {
                    // sum = sum + number;
                    sum += number;
                }
            } while (number != -1);
            System.Console.WriteLine("Girilen sayıların toplamı: " + sum);
        }
    }
}
