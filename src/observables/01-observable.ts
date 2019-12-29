import { Observable, Observer } from 'rxjs';

const observer: Observer<any> = {
    next: val => console.log('[next]:', val),
    error: err => console.error('[error]', err),
    complete: () => console.info('[completed]')
};

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