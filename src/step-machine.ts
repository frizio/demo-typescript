import { Machine, interpret } from 'xstate';

console.log('XState Getting Started: https://xstate.js.org/docs/guides/start.html');
console.log('Step state machine');

const stepMachine = Machine({
  id: 'step',
  initial: 'one',
  states: {
    one: {
      on: { NEXT: 'two' }
    },
    two: {
      on: { NEXT: 'three', PREV: 'one' }
    },
    three: {
      type: 'final',
      on: { PREV: 'two' }
    }
  }
});

console.log(stepMachine.transition('one', 'NEXT').value);
