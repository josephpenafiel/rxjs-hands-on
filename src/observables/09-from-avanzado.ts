import { of, from } from 'rxjs';
/*
* of = takes arguments and generates sequence
* from = takes array, promise, iterable, observable
*/

// iterator
const generator = function*() {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
}

const iterator = generator();

const observer = {
    next: val => console.log('next:', val),
    complete: () => console.log('complete')
}

// const source$ = of([1,2,3,4,5]); // prints the array
// const source$ = from([1,2,3,4,5]); // prints the sequence
// const source$ = from('Joseph'); // prints every char

const source$ = from(fetch('https://api.github.com/users/klerith')); // promise
// source$.subscribe(observer);
source$.subscribe( async resp => {
    console.log(resp);
    const data = await resp.json();
    console.log(data); // response body
});

from(iterator).subscribe(observer);