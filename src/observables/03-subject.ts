import { Observer, Observable, Subject } from 'rxjs';

const observer: Observer<any> = {
    next: val => console.log('[next]:', val),
    error: err => console.error('[error]', err),
    complete: () => console.info('[completed]')
};

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