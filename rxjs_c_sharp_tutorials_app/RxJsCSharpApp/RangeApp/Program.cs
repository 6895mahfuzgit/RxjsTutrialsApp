using System;
using System.Reactive.Linq;

namespace RangeApp
{
    internal class Program
    {
        static void Main(string[] args)
        {
            IObservable<int> range = Observable.Range(1, 100).TakeLast(10);

            range.Subscribe(x =>
            {
                Console.WriteLine(x);
            });
        }
    }
}
