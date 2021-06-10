using System;

namespace P010_GradeStatistics
{
    class Program
    {
        static void Main(string[] args)
        {
            string[] grades = new string[5] { "A", "F", "C", "A", "B" };
            int[] statics = new int[5];

            for (int i = 0; i < grades.Length; i++)
            {
                switch (grades[i])
                {
                    case "A":
                    case "a":
                        statics[0] = statics[0] + 1;
                        break;
                    case "B":
                    case "b":
                        statics[1] += 1;
                        break;
                    case "C":
                    case "c":
                        statics[2]++;
                        break;
                    case "D":
                    case "d":
                        statics[3]++;
                        break;
                    case "F":
                    case "f":
                        statics[4]++;
                        break;
                }
                if (grades[i] == "A")
                {
                    statics[0] = statics[0] + 1;
                }
                else if (grades[i] == "B")
                {
                    statics[1] += 1;
                }
                else if (grades[i] == "C")
                {
                    statics[2]++;
                }
                else if (grades[i] == "D")
                {
                    statics[3]++;
                }
                else
                {
                    statics[4]++;
                }
            }

            for (int i = 0; i < 5; i++)
            {
                System.Console.WriteLine("Öğrencilerin sırasıyla harf notu dağılımı: " + statics[i]);
            }
        }
    }
}
