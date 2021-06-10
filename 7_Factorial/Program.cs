using System;

namespace P007_Factorial
{
    class Program
    {
        static void Main(string[] args)
        {
            System.Console.WriteLine("Bir sayı giriniz");
            int n = Convert.ToInt32(Console.ReadLine());
            int f = 1;

            while (n > 1)
            {
                f = f * n;
                n = n - 1;
            }
            System.Console.WriteLine("Faktöryel: " + f);
        }
    }
}
