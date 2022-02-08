using System;

namespace Codewars
{
     class Program // 6-7 kyu
    { 
        public static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");
            Problem pr = new Problem();
            //
         
            Console.WriteLine(pr.Extract(new[] { -6, -3, -2, -1, 18, 19, 20 }));
        }

        
    }
}
