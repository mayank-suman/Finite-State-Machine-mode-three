# Finite-State-Machine-mod-three

The solution can be found in `index.js` and tests are found in `index.test.js`.

This solution implements a generic `FiniteStateMachine` class that can be used to create various FSMs. The `createModThreeFSM` function creates an FSM specifically for the mod-three problem. The `modThree` function uses this FSM to calculate the remainder when dividing the binary number by three.

The Jest test cases cover the creation of the FSM, the modThree function's correctness for various inputs (including edge cases and large numbers), and error handling for invalid inputs.

You'll need to setup the env by installing the nodeJs and then by running the command:

```bash
npm install
```

To run these tests:

```bash
npm test
```

This implementation demonstrates good programming practices by:
1. Using a modular design with separate classes and functions
2. Implementing error handling for invalid inputs
3. Providing a flexible and reusable FSM implementation
4. Including comprehensive unit tests to verify correctness
5. Following JavaScript/Node.js conventions and best practices
