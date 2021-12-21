import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { storeState, blueFood, feed, hydrate, superWater, plant } from './js/plant.js';

// This function has side effects because we are using jQuery. Manipulating the DOM will always be a side effect. Note that we only use one of our functions to alter soil. You can easily add more.

const airPlant = plant("airPlant");
const airPlantStateControl = storeState();

$('#air-plant-name').text(airPlant.name);

$('#air-plant-super-feed').click(function() {
  const airPlantState = airPlantStateControl(blueFood);
  $('#air-plant-soil-value').text(`Soil: ${airPlantState.soil}`);
});

$('#air-plant-feed').click(function() {
  const airPlantState = airPlantStateControl(feed);
  $('#air-plant-soil-value').text(`Soil: ${airPlantState.soil}`);
});

$('#air-plant-water').click(function() {
  const airPlantState = airPlantStateControl(hydrate);
  $('#air-plant-water-value').text(`Water: ${airPlantState.water}`);
});

$('#air-plant-super-water').click(function() {
  const airPlantState = airPlantStateControl(superWater);
  $('#air-plant-water-value').text(`Water: ${airPlantState.water}`);
});
  
// This function doesn't actually do anything useful in this application - it just demonstrates how we can "look" at the current state (which the DOM is holding anyway). However, students often do need the ability to see the current state without changing it so it's included here for reference.
  
$('#air-plant-show-state').click(function() {
  // We just need to call stateControl() without arguments to see our current state.
  const currentState = airPlantStateControl();
  $('#air-plant-soil-value').text(`Soil: ${currentState.soil}`);
  $('#air-plant-water-value').text(`Water: ${currentState.water}`);
});