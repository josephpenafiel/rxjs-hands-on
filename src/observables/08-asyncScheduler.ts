import { asyncScheduler } from "rxjs";


// ##################################################################### //
// ########################## like setTimeout ########################## //
// ##################################################################### //
const sayHi = () => console.log('hi');
const sayHi2 = name => console.log(`hi, ${name}`);
// asyncScheduler.schedule(sayHi, 2000); // execute fn after 2000ms
asyncScheduler.schedule(sayHi2, 2000, 'Joe');

// ##################################################################### //
// ########################## like setInterval ######################### //
// ##################################################################### //

const subs = asyncScheduler.schedule( function(state) {
    console.log('state', state);
    this.schedule(state + 1, 1000);

}, 3000, 0);

// setTimeout(() => {
//     subs.unsubscribe();
//     console.log('Async Scheduler done!');
// }, 6000);

//or 

asyncScheduler.schedule(() => subs.unsubscribe(), 5000);