import { Machine, interpret } from 'xstate';

console.log('XState Getting Started: https://xstate.js.org/docs/guides/start.html');
console.log('Traffic light as a state machine');

const trafficLightMachine = Machine(
  {
    // Machine Identifier
    id: 'trafficLight',
    // Initial State
    initial: 'green',
    // Local context for entire machine
    context: {
      elapsed: 0,
      direction: 'east'
    },
    // State Definition
    states: { 
      green: { entry: 'alertGreen' },
      yellow: { },
      red: { }
    }
  },
  {
    actions: {
      // action implementation
      alertGreen: (context, event) => {
        console.log('Greeeeeeeeeeeeen!', context.direction, event);
      }
    },
    activities: {
      /* ... */
    },
    guards: {
      /* ... */
    },
    services: {
      /* ... */
    }
  }
);

const trafficLightService = interpret(trafficLightMachine);

trafficLightService.onTransition(
  state => console.log(state.value) // state.value
);

trafficLightService.start();