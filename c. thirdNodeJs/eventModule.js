const EventEmitter = require('events');

const emitter = new EventEmitter();

/* ------::DO NOT USE PARAMETER::------ */
// resister a listener for bellRing event;
emitter.on('bellRing', () => {
    console.log('Your Time Is Over!');
});

// rise an event;
emitter.emit('bellRing');

/* ------::USE SINGLE PARAMETER::------ */
emitter.on('bellRing2', (second) => {
    console.log(`Your bell ring is over in ${second}!`);
});

setTimeout(() => {
    emitter.emit('bellRing2', '2 second');
}, 2000);

/* ------::USE MULTIPLE PARAMETER::------ */
emitter.on('bellRing3', (first, second) => {
    console.log(`Mem your ${first} ${second}!`);
});
setTimeout(() => {
    emitter.emit('bellRing3', 'class time', 'is over');
}, 4000);

/* ------::USE MULTIPLE PARAMETER. USE OBJECT::------ */
emitter.on('bellRing4', ({ name: sirName, second }) => {
    console.log(`Hello ${sirName} sir your time is over in ${second}!`);
});
setTimeout(() => {
    emitter.emit('bellRing4', {
        name: 'Jasim Khan',
        second: '300',
    });
}, 6000);
