import { interval } from 'rxjs';
import { take, reduce, tap } from 'rxjs/operators';

const numbers = [1,2,3,4,5];

const reducer = (acc: number, curr: number): number => {
    return acc + curr;
}

// const total = numbers.reduce(reducer, 0); //javascript's reduce
// console.log(total);

interval(1000)
.pipe(
    take(5),
    tap(console.log),
    reduce(reducer, 5), // start from 5
)
.subscribe({
    next: val => console.log('next:', val),
    complete: () => console.log('complete'),
});