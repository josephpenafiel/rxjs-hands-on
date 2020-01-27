import { range } from 'rxjs';
import { tap, map } from 'rxjs/operators';

const numbers$ = range(1,5);

numbers$
.pipe(
    tap( x => console.log('tap:', x)),
    map( val => val * 10),
    tap({
        next: val => console.log('second tap:', val),
        complete: () => console.log('done!'),
    }),
)
.subscribe(val => console.log('subs:', val));

