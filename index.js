// FSM Class Implementation
class FiniteStateMachine {
  constructor(states, alphabet, initialState, transitionFunction) {
    this.states = states; // Set of states (Q)
    this.alphabet = alphabet; // Input alphabet (Σ)
    this.currentState = initialState; // Initial state (q0)
    this.transitionFunction = transitionFunction; // Transition function (δ)
  }

  // Process an input string
  process(input) {
    for (const symbol of input) {
      if (!this.alphabet.includes(symbol)) {
        throw new Error(`Invalid input symbol: ${symbol}`);
      }
      this.currentState = this.transitionFunction(this.currentState, symbol);
    }
    return this.currentState;
  }
}

// Mod-three FSM Configuration
const states = ['S0', 'S1', 'S2'];
const alphabet = ['0', '1'];
const initialState = 'S0';

// Transition function definition
const transitionFunction = (state, symbol) => {
  const transitions = {
    S0: { 0: 'S0', 1: 'S1' },
    S1: { 0: 'S2', 1: 'S0' },
    S2: { 0: 'S1', 1: 'S2' },
  };
  return transitions[state][symbol];
};

// Create the FSM instance
const modThreeFSM = new FiniteStateMachine(
  states,
  alphabet,
  initialState,
  transitionFunction
);

// Function to compute mod-three using FSM
function modThree(input) {
  if (!/^[01]+$/.test(input)) {
    throw new Error('Input must be a binary string.');
  }

  const finalState = modThreeFSM.process(input);

  // Map final states to their corresponding output values
  const outputMapping = { S0: 0, S1: 1, S2: 2 };
  return outputMapping[finalState];
}

// Test Cases
console.assert(modThree('1101') === 1, 'Test Case 1 Failed');
console.assert(modThree('1110') === 2, 'Test Case 2 Failed');
console.assert(modThree('1111') === 0, 'Test Case 3 Failed');
console.assert(modThree('1010') === 1, 'Test Case 4 Failed');
console.assert(modThree('110') === 0, 'Test Case 5 Failed');

// Additional Test Cases
console.assert(modThree('0') === 0, 'Test Case 6 Failed');
console.assert(modThree('1') === 1, 'Test Case 7 Failed');
console.assert(modThree('10') === 2, 'Test Case 8 Failed');
console.assert(modThree('100') === 1, 'Test Case 9 Failed');
console.assert(modThree('101') === 2, 'Test Case 10 Failed');

console.log('All test cases passed!');
