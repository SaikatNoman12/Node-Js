const EventEmitter = require('events');

class School extends EventEmitter {
    starPeriod() {
        console.log('Class Started!');

        // raise event when bell rings;
        // raise an event;
        setTimeout(() => {
            this.emit('bellRing', {
                period: 'first',
                text: 'Period Ended',
            });
        }, 2000);
    }
}

module.exports = School;
