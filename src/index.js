import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { stateControl, blueFood, feed, hydrate, superWater } from './js/plant.js'

  // This function has side effects because we are using jQuery. Manipulating the DOM will always be a side effect. Note that we only use one of our functions to alter soil. You can easily add more.
  
    $('#super-feed').click(function() {
      const newState = stateControl(blueFood);
      $('#soil-value').text(`Soil: ${newState.soil}`);
    });
    
    $('#feed').click(function() {
      const newState = stateControl(feed);
      $('#soil-value').text(`Soil: ${newState.soil}`);
    });

    $('#water').click(function() {
      const newState = stateControl(hydrate);
      $('#water-value').text(`Water: ${newState.water}`);
    });

    $('#super-water').click(function() {
      const newState = stateControl(superWater);
      $('#water-value').text(`Water: ${newState.water}`);
    });
  
  // This function doesn't actually do anything useful in this application - it just demonstrates how we can "look" at the current state (which the DOM is holding anyway). However, students often do need the ability to see the current state without changing it so it's included here for reference.
  
    $('#show-state').click(function() {
      // We just need to call stateControl() without arguments to see our current state.
      const currentState = stateControl();
      $('#soil-value').text(`Soil: ${currentState.soil}`);
      $('#water-value').text(`Water: ${currentState.water}`);
    });