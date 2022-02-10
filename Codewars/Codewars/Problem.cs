using System;
using System.Collections.Generic;
using System.Linq;

namespace Codewars
{
    public class Problem
    {
        //https://www.codewars.com/kata/51ba717bb08c1cd60f00002f/train/csharp

        public string Extract(int[] args)
        {
            string digitsCollector = string.Empty;


            for (int i = 0; i < args.Length - 1; i++)
            {
                var delA = args[i];
                var delB = args[i + 1];

                if (args[i] != args[i + 1] - 1)
                {
                    digitsCollector += $", {args[i + 1]}";
                }

                if (args[i] == args[i + 1] - 1)
                {
                    for (int y = i; y < args.Length - 1; y++)
                    {
                        var delC = args[y];
                        var delD = args[y + 1];

                        if (args[y] == args[y + 1] - 1)
                        {
                            //digitsCollector += "x";
                            i++;
                        }
                        else
                        {
                            digitsCollector += args[y].ToString();
                            digitsCollector += args[y+1].ToString(); break;
                        }
                    }
                }
            }
            //-6, -3, -2, -1, 18, 19, 20 
            return digitsCollector;
        }


    }
}
