using System;

namespace P003_FindMaxOfTwoValues
{
    class Program
    {
        static void Main(string[] args)
        {
            int a;
            int b;

            Console.WriteLine("Birinci sayı");
            a = Convert.ToInt32(Console.ReadLine());
            Console.WriteLine("İkinci sayı");
            b = Convert.ToInt32(Console.ReadLine());

            if (a > b)
            {
                System.Console.WriteLine("Büyük sayı " + a);
            }
            else
            {
              System.Console.WriteLine("İki sayıdan büyük olanı " + b); 
            }
        }
    }
}
