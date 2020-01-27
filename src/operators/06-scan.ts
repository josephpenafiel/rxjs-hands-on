import { from } from 'rxjs';
import { reduce, scan, map } from 'rxjs/operators';
const numbers = [1,2,3,4,5,6];

const acumulator = (acc, curr) => acc + curr;



from(numbers)
.pipe(
    reduce(acumulator, 0),
)
.subscribe(console.log);

from(numbers)
.pipe(
    scan(acumulator, 0),
)
.subscribe(console.log); // prints each accumulation

// Redux pattern 

interface User {
    id: number;
    auth: boolean;
    token: string;
    age?: number;
}

const user: User[] = [
    {id: 65, auth: false, token: 'abcs'},
    {id: 67, auth: false, token: null},
    {id: 65, auth: true, token: null},
];

const state$ = from(user).pipe(
    scan<User>((acc, curr) => {
        return {...acc, ...curr}
    }, {age: 27, id: 10, auth:false, token:null}),
);

state$.pipe(
    map(state => state)
).subscribe(console.log);