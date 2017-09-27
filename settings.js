/*
  Get Settings from the DOM.
*/
function getSettings() {
  let settings = {};

  // Get all the settings
  settings.lineWidth = parseInt(document.querySelector('.settings-line-width').value);
  settings.slashProbability = parseFloat(document.querySelector('.settings-slash-probability').value);
  settings.bgColor = document.querySelector('.settings-bg-color').value;
  settings.lineColor = document.querySelector('.settings-line-color').value;
  settings.patternSize = parseInt(document.querySelector('.settings-pattern-size').value);

  return settings;
}
