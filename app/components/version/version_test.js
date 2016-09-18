'use strict';

describe('GameOfDrones.version module', function() {
  beforeEach(module('GameOfDrones.version'));

  describe('version service', function() {
    it('should return current version', inject(function(version) {
      expect(version).toEqual('0.1');
    }));
  });
});
