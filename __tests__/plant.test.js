import { changeState, storeState, blueFood, feed, hydrate, superWater, plant } from './../src/js/plant.js';

describe('storeState', () => {

  test('should correctly store the initial state', () => {
      const stateControl = storeState();
      expect(stateControl()).toEqual({});
  });
});

describe('changeState', () => {

  test('should correctly create functions that alter a plants properties', () => {
    let testPlant = {}
    const testFunction = changeState("testProperty")(2);
    expect(testFunction(testPlant)).toEqual({ testProperty: 2 });
  });
});