describe('GameServices', function () {
  // Load your module.
  beforeEach(module('GameOfDrones'));

  //Setup the mock service in an anonymous module.
  
  var mockAPIService;
  beforeEach(inject(['APIServices','$q',function(APIServices,$q) {
    mockAPIService =  APIServices;
    spyOn(APIServices, "getMoves").and.callFake(function() {
      var moves = [
      {
        "move": "paper",
        "kills": "rock"
      },
      {
        "move": "rock",
        "kills": "scissors"
      },
      {
        "move": "scissors",
        "kills": "paper"
      }
      ];
      var deferred = $q.defer();
      deferred.resolve(moves);
      return deferred.promise;
    });
  }]));

  it('can get an instance of my factory', inject(function(GameServices) {
    expect(GameServices).toBeDefined();
  }));

  it('can get the list of moves', inject(function(GameServices) {
    var moves;
    GameServices.init({}).then(function(result){
      moves=result;
      expect(GameServices.moves).toBeDefined();
    });  
  }));

  it('can get the list of moves', inject(function(GameServices) {
    var moves;
    GameServices.init({}).then(function(result){
      moves=result;
      expect(GameServices.moves).toBeGreaterThan(0);
    });  
  }));
});