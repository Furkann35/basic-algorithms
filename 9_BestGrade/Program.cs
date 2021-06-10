using System;

namespace P009_BestGrade
{
    class Program
    {
        static void Main(string[] args)
        {

            int[] grades = new int[3];
            grades[0] = 100;
            grades[1] = 85;
            grades[2] = 95;
            int maxGrade = 0;

            for (int i = 0; i <= 2; i++)
            {
                if (grades[i] > maxGrade)
                {
                    maxGrade = grades[i];
                }
            }
            System.Console.WriteLine("En iyi not " + maxGrade);


        }
    }
}
