'use strict';

angular.module('GameOfDrones.version', [
  'GameOfDrones.version.interpolate-filter',
  'GameOfDrones.version.version-directive'
])

.value('version', '0.1');
