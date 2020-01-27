import { Observable, Observer } from 'rxjs';

const observer: Observer<any> = {
    next: val => console.log('[next]:', val),
    error: err => console.error('[error]', err),
    complete: () => console.info('[completed]')
};

const interval$ = new Observable<number>(subscriber => {
    let count = 0;
    const timer = setInterval(() => {
        count++;
        subscriber.next(count);
    }, 1000);

    setTimeout(() => {
        subscriber.complete();
    }, 5000);

    // called by the unsubscribe() method
    return () => {
        clearInterval(timer);
        console.log('Timer dropped!');
    }
});

const subs1 = interval$.subscribe(observer); // returns a Subscription
const subs2 = interval$.subscribe(num => console.log('subs2:', num));
const subs3 = interval$.subscribe(num => console.log('subs3:', num));

// chained subscriptions
subs1.add(subs2)
     .add(subs3);
setTimeout(() => {
    subs1.unsubscribe(); // not the same as complete() from observer
    // subs2.unsubscribe();
    // subs3.unsubscribe();
    console.log('Timeout done!');
}, 7000);