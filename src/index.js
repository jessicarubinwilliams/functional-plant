import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { storeState, blueFood, feed, hydrate, superWater, plant } from './js/plant.js';

// This function has side effects because we are using jQuery. Manipulating the DOM will always be a side effect. Note that we only use one of our functions to alter soil. You can easily add more.

const plant1StateControl = storeState();
const plant2StateControl = storeState();

$('#plant1-name').text("Air Plant");

$('#plant1-super-feed').click(function() {
  const plant1State = plant1StateControl(blueFood);
  $('#plant1-soil-value').text(`Soil: ${plant1State.soil}`);
});

$('#plant1-feed').click(function() {
  const plant1State = plant1StateControl(feed);
  $('#plant1-soil-value').text(`Soil: ${plant1State.soil}`);
});

$('#plant1-water').click(function() {
  const plant1State = plant1StateControl(hydrate);
  $('#plant1-water-value').text(`Water: ${plant1State.water}`);
});

$('#plant1-super-water').click(function() {
  const plant1State = plant1StateControl(superWater);
  $('#plant1-water-value').text(`Water: ${plant1State.water}`);
});
  
// This function doesn't actually do anything useful in this application - it just demonstrates how we can "look" at the current state (which the DOM is holding anyway). However, students often do need the ability to see the current state without changing it so it's included here for reference.
  
$('#plant1-show-state').click(function() {
  // We just need to call stateControl() without arguments to see our current state.
  const currentState = plant1StateControl();
  $('#plant1-soil-value').text(`Soil: ${currentState.soil}`);
  $('#plant1-water-value').text(`Water: ${currentState.water}`);
});

$('#plant2-name').text("Rose Painted Calathea");

$('#plant2-super-feed').click(function() {
  const plant2State = plant2StateControl(blueFood);
  $('#plant2-soil-value').text(`Soil: ${plant2State.soil}`);
});

$('#plant2-feed').click(function() {
  const plant2State = plant2StateControl(feed);
  $('#plant2-soil-value').text(`Soil: ${plant2State.soil}`);
});

$('#plant2-water').click(function() {
  const plant2State = plant2StateControl(hydrate);
  $('#plant2-water-value').text(`Water: ${plant2State.water}`);
});

$('#plant2-super-water').click(function() {
  const plant2State = plant2StateControl(superWater);
  $('#plant2-water-value').text(`Water: ${plant2State.water}`);
});
  
// This function doesn't actually do anything useful in this application - it just demonstrates how we can "look" at the current state (which the DOM is holding anyway). However, students often do need the ability to see the current state without changing it so it's included here for reference.
  
$('#plant2-show-state').click(function() {
  // We just need to call stateControl() without arguments to see our current state.
  const currentState = plant2StateControl();
  $('#plant2-soil-value').text(`Soil: ${currentState.soil}`);
  $('#plant2-water-value').text(`Water: ${currentState.water}`);
});