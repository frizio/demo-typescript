import { Machine, interpret } from 'xstate';

console.log('XState Getting Started: https://xstate.js.org/docs/guides/start.html');
console.log('Promise as a state machine');

const promiseMachine = Machine({
  id: 'promise',
  initial: 'pending',
  states: {
    pending: {
      on: {
        RESOLVE: 'resolved',
        REJECT: 'rejected'
      }
    },
    resolved: {
      type: 'final'
    },
    rejected: {
      type: 'final'
    }
  }
});

const promiseService = interpret(promiseMachine);

promiseService.onTransition(
  state => console.log(state.value)
);

// Start the service
promiseService.start();
// => 'pending'

promiseService.send('RESOLVE');
// => 'resolved'
