import { Machine, interpret } from 'xstate';

console.log('XState Getting Started: https://xstate.js.org/docs/guides/start.html');
console.log('Toggle as a state machine');

const toggleMachine = Machine({
  id: 'toggle',
  initial: 'inactive',
  states: {
    inactive: { on: { TOGGLE: 'active' } },
    active: { on: { TOGGLE: 'inactive' } }
  }
});

// Machine instance with internal state
const toggleService = interpret(toggleMachine)
  .onTransition(state => console.log(state.value))
  .start();
// => 'inactive'

toggleService.send('TOGGLE');
// => 'active'

toggleService.send('TOGGLE');
// => 'inactive'
