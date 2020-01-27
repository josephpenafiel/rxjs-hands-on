import { of, range, asyncScheduler } from 'rxjs';

// const src$ = of(1,2,3,4,5);
// const src$ = range(1,5); // (from, to)
const src$ = range(1,5, asyncScheduler); // makes it async


src$.subscribe(console.log);
