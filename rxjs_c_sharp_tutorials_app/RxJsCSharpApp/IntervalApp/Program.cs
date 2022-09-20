using System;
using System.Collections.Generic;
using System.Reactive.Linq;

namespace IntervalApp
{



    internal class Program
    {
        static void Main(string[] args)
        {

            new Counter().timer.Subscribe(data =>
            {
                Console.WriteLine(data);
            });

            Console.ReadKey();
        }
    }

    public class Counter
    {
        public IObservable<long> timer = Observable.Interval(TimeSpan.FromSeconds(1)).TakeUntil(counter => counter == 5);
    }
}
