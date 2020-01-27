import { interval, timer } from "rxjs";

const observer = {
    next: val => console.log('next', val),
    complete: () => console.log('complete'),
};
const today = new Date();
today.setSeconds( today.getSeconds() + 5); // add 5 seconds to now

// const interval$ = interval(1000); //execute next every 1000msss
// const timer$ = timer(2000); // execute after 2000ms and complete
// const timer$ = timer(); // execute complete immediately
// const timer$ = timer(2000, 1000); // execute after 2000ms and execute a 1000ms interval
const timer$ = timer(today); // execute based on real time


// interval$.subscribe(observer);
timer$.subscribe(observer);