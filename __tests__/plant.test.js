import { storeState, blueFood, feed, hydrate, superWater, plant } from './../src/js/plant.js';

describe('storeState', () => {

  test('should correctly store the initial state', () => {
      const stateControl = storeState();
      expect(stateControl()).toEqual({});
  });
});