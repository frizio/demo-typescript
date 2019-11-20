import { Machine, interpret } from 'xstate';

console.log('XState Getting Started: https://xstate.js.org/docs/guides/start.html');
console.log('Traffic light as a state machine');

const trafficLightMachine = Machine(
  {
    // Machine Identifier
    id: 'trafficLight',
    // Initial State
    initial: 'green',
    // State Definition
    states: { 
      green: { },
      yellow: { },
      red: { }
    }
  } 
);

const trafficLightService = interpret(trafficLightMachine);

trafficLightService.onTransition(
  state => console.log(state) // state.value
);

trafficLightService.start();