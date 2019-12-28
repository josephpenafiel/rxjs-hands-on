import { Observable, Subject } from 'rxjs';
import { observer } from '../index';

const interval$ = new Observable<number>( subs => {
    const timer = setInterval(() => {
        subs.next(Math.random())
    }, 1000);

    return () => {
        clearInterval( timer );
        console.log('timer cleared!');
    }
});

/*
Multiple subscriptions to same observable
Is an observer
Also has next, error, and complete 
*/
const subj$ = new Subject<number>();
const mainSubs = interval$.subscribe( subj$ );

const subs1 = subj$.subscribe(observer);
const subs2 = subj$.subscribe(observer);

setTimeout(() => {
    subj$.next(10);
    subj$.complete(); // this won't clear the observable
    mainSubs.unsubscribe();
}, 4000);