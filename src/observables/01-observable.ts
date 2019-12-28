import { Observable, Observer } from 'rxjs';
import { observer } from '../index';

// const obs$ = Observable.create(); // not common
const obs$ = new Observable<string>( subs => {
    subs.next('hello');
    subs.next('world');
    // const a = undefined;
    // a.name = 'joseph'; // force error
    subs.complete(); // completes
    subs.next('world'); // this won't execute
} );

// obs$.subscribe( console.log ); // first way

// obs$.subscribe(                // second way
//     val => console.log('next:', val),
//     err => console.error('err:', err),
//     () => console.info('Complete')
// )

obs$.subscribe( observer ); // third way