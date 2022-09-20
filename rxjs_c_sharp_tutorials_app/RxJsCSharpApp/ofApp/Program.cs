using System;
using System.Collections.Generic;
using System.Reactive.Linq;

namespace ToObservableApp
{
    internal class Program
    {
        static void Main(string[] args)
        {
            IObservable<int> numbers = Observable.ToObservable<int>(new List<int> { 1, 2, 3, 4, 5, 6 });
            numbers.Take(3)
                   .Aggregate((a, b) => a + b)
                   .Subscribe(x =>
            {
                Console.WriteLine(x);
            });
        }
    }
}
