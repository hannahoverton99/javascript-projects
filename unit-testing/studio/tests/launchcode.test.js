// launchcode.test.js code:
const launchcode = require('../index.js');

describe("Testing launchcode", function(){
  test('should have key called organization with the value of nonprofit', function(){
    expect(launchcode.organization).toEqual('nonprofit')
  });
  test('should have key called executiveDirector with the value of Jeff', function(){
    expect(launchcode.executiveDirector).toEqual('Jeff')
  });
  test('should have key called percentageCoolEmployees with value of 100', function(){
    expect(launchcode.percentageCoolEmployees === 100).toBe(true)
  });
  test('should have key called programsOffered that stores an array of "Web Development", "Data Analysis", "Liftoff"', function(){
    expect(launchcode.programsOffered.length).toBe(3);
    expect(launchcode.programsOffered[0]).toBe("Web Development");
    expect(launchcode.programsOffered[1]).toBe("Data Analysis");
    expect(launchcode.programsOffered[2]).toBe("Liftoff");
  });

  describe('should have a method called launchOutput that', function(){
    test('should return "Launch!" when passed a number that is ONLY divisible by 2', function(){
    expect(launchcode.launchOutput(2)).toEqual("Launch!");
    });
    test('should return "Code!" when passed a number that is ONLY divisible by 3', function(){
    expect(launchcode.launchOutput(3)).toEqual("Code!");
    });
    test('should return "Rocks!" when passed a number that is ONLY divisible by 5', function(){
    expect(launchcode.launchOutput(5)).toEqual("Rocks!");
    });
    test('should return "LaunchCode!" when passed a number that is divisible by 2 AND 3', function(){
    expect(launchcode.launchOutput(2).slice(0,6) + launchcode.launchOutput(3)).toEqual("LaunchCode!");
    });
    test('should return "Code Rocks!" when passed a number that is divisible by 3 and 5', function(){
    expect(launchcode.launchOutput(3).slice(0, 4) +" "+ launchcode.launchOutput(5)).toEqual("Code Rocks!");
    });
    test('should return "Launch Rocks!" when passed a number that is divisible by 2 AND 5', function(){
    expect(launchcode.launchOutput(2).slice(0, 6) +" "+ launchcode.launchOutput(5)).toEqual("Launch Rocks!");
    });
    test('should return "LaunchCode Rocks!" when passed a number that is divisible by 2, 3, AND 5', function(){
    expect(launchcode.launchOutput(2).slice(0,6) + launchcode.launchOutput(3).slice(0,4) +" "+ launchcode.launchOutput(5)).toEqual("LaunchCode Rocks!");
    });
    test(`should return "Rutabagas! That doesn't work." when passed a number that is NOT divisible by 2, 3, or 5`, function(){
    expect(launchcode.launchOutput(7)).toEqual("Rutabagas! That doesn't work.");
    });

});
}); 