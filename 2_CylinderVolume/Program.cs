using System;

namespace P0002_CylinderVolume
{
    class Program
    {
        static void Main(string[] args)
        {
            int r;
            int h;
            double pi = 3.14159;

            System.Console.WriteLine("Silindirin yarıçapını giriniz");
            r = Convert.ToInt32(Console.ReadLine());
            System.Console.WriteLine("Silindirin yüksekliğini giriniz");
            h = Convert.ToInt32(Console.ReadLine());

            double v = pi * r * r * h;
            System.Console.WriteLine("Silindirin hacmi:" + v);
            Console.WriteLine("Silindirin hacmi {0:N2}",v);
        }
    }
}
