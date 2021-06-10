using System;

namespace P004_CompareTwoValues
{
    class Program
    {
        static void Main(string[] args)
        {
            System.Console.WriteLine("Birinci Sayı:");
            int a = Convert.ToInt32(Console.ReadLine());
            System.Console.WriteLine("İkinci Sayı:");
            int b = Convert.ToInt32(Console.ReadLine());


            //Birince yöntem
            if (a > b)
            {
                System.Console.WriteLine("{0} sayısı {1} sayısından büyüktür", a, b);
            }
            else
            {
                if (b > a)
                {
                    System.Console.WriteLine("{0} sayısı {1} sayısından büyüktür", b, a);
                }
                else
                {
                    System.Console.WriteLine("İki sayı birbirine eşittir");
                }
            }

            //İkinci yöntem
            if (a > b)
            {
                System.Console.WriteLine("{0} sayısı {1} sayısından büyüktür", a, b);

            }
            else if (b > a)
            {
                System.Console.WriteLine("{0} sayısı {1} sayısından büyüktür", b, a);

            }
            else
            {
                System.Console.WriteLine("İki sayı birbirine eşittir");
            }
        }
    }
}
