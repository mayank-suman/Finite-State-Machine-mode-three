const { FiniteStateMachine, createModThreeFSM, modThree } = require('./index.js');

describe('Finite State Machine', () => {
  test('should create a valid FSM', () => {
    const fsm = createModThreeFSM();
    
    expect(fsm).toBeInstanceOf(FiniteStateMachine);
    expect(fsm.states).toEqual(['S0', 'S1', 'S2']);
    expect(fsm.alphabet).toEqual(['0', '1']);
    expect(fsm.initialState).toBe('S0');
    expect(fsm.finalStates).toEqual(['S0', 'S1', 'S2']);
  });

  test('should throw an error for invalid input', () => {
    const fsm = createModThreeFSM();

    expect(() => fsm.process('102')).toThrow('Invalid input symbol: 2');
  });
});

describe('modThree function', () => {
  test('should correctly calculate mod 3 for various inputs', () => {
    expect(modThree('0')).toBe(0);
    expect(modThree('1')).toBe(1);
    expect(modThree('10')).toBe(2);
    expect(modThree('11')).toBe(0);
    expect(modThree('100')).toBe(1);
    expect(modThree('101')).toBe(2);
    expect(modThree('110')).toBe(0);
    expect(modThree('111')).toBe(1);
    expect(modThree('1000')).toBe(2);
  });

  test('should handle large binary numbers', () => {
    expect(modThree('1010101010101010')).toBe(1);
    expect(modThree('1111111111111111')).toBe(0);
    expect(modThree('10000000000000000')).toBe(1);
  });

  test('should throw an error for invalid input', () => {
    expect(() => modThree("")).toThrow("Input must be a binary string."); // Empty string test
    expect(() => modThree("2")).toThrow("Input must be a binary string."); // Invalid character test
    expect(() => modThree('102')).toThrow('Input must be a binary string.'); // Invalid character test
    expect(() => modThree('1a1')).toThrow('Input must be a binary string.'); // Invalid character test
  });
});
