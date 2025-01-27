class FiniteStateMachine {
  constructor(states, alphabet, initialState, finalStates, transitionFunction) {
    this.states = states;
    this.alphabet = alphabet;
    this.initialState = initialState;
    this.finalStates = finalStates;
    this.transitionFunction = transitionFunction;
  }

  process(input) {
    let currentState = this.initialState;
    for (const symbol of input) {
      if (!this.alphabet.includes(symbol)) {
        throw new Error(`Invalid input symbol: ${symbol}`);
      }
      currentState = this.transitionFunction(currentState, symbol);
    }
    return currentState;
  }
}

function createModThreeFSM() {
  const states = ['S0', 'S1', 'S2'];
  const alphabet = ['0', '1'];
  const initialState = 'S0';
  const finalStates = ['S0', 'S1', 'S2'];
  const transitionFunction = (state, symbol) => {
    const transitions = {
      S0: { '0': 'S0', '1': 'S1' },
      S1: { '0': 'S2', '1': 'S0' },
      S2: { '0': 'S1', '1': 'S2' }
    };
    return transitions[state][symbol];
  };

  return new FiniteStateMachine(states, alphabet, initialState, finalStates, transitionFunction);
}

function modThree(input) {
  if (!/^[01]+$/.test(input)) {
    throw new Error("Input must be a binary string.");
  }

  const fsm = createModThreeFSM();
  const finalState = fsm.process(input);
  const outputMap = { S0: 0, S1: 1, S2: 2 };
  return outputMap[finalState];
}

module.exports = { FiniteStateMachine, createModThreeFSM, modThree };
