import { Machine, interpret } from 'xstate';

console.log('XState Getting Started: https://xstate.js.org/docs/guides/start.html');
console.log('Counter state machine');

interface Context {
  count: number
}

const increment = (context: Context) => context.count + 1;
const decrement = (context: Context) => context.count - 1;

const counterMachine = Machine({
  initial: 'active',
  context: {
    count: 0
  },
  states: {
    active: {
      on: {
        INC: { actions: assign({ count: increment }) },
        DEC: { actions: assign({ count: decrement }) }
      }
    }
  }
});

const counterService = interpret(counterMachine)
  .onTransition(state => console.log(state.context.count))
  .start();
// => 0

counterService.send('INC');
// => 1

counterService.send('INC');
// => 2

counterService.send('DEC');
// => 1
