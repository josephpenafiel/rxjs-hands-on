import { range, from, fromEvent, Observer } from 'rxjs';
import { filter, map } from 'rxjs/operators';

const observer: Observer<any> = {
    next: val => console.log('[next]:', val),
    error: err => console.error('[error]', err),
    complete: () => console.info('[completed]')
};

range(1,10).pipe(
    filter((val, i) => val % 2 === 1)
)
.subscribe(console.log);

interface ICharacter {
    type: string;
    name: string;
}

const characters: ICharacter[] = [
    { type: 'hero', name: 'batman'}, 
    { type: 'hero', name: 'superman'},
    { type: 'villain', name: 'joker'},
];

from(characters)
.pipe(
    filter(c => c.type == 'villain')
)
.subscribe(console.log);

fromEvent<KeyboardEvent>(document, 'keyup')
.pipe(
    map( e => e.code ),
    filter( k => k === 'Enter' || 
            k === "KeyA" 
          ),
)
.subscribe(observer);
