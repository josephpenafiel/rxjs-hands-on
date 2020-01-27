import { of } from 'rxjs';

const obs$ = of([1,2], {a:1, b:2}, function(){}, true, Promise.resolve(true));

console.log('Observable started');
obs$.subscribe( 
    next => console.log('next:', next),
    null,
    () => console.log('done!')    
);
console.log('Observable finished');
