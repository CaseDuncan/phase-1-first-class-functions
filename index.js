
function receivesAFunction(greeting){
    greeting();
}
function returnsANamedFunction() {
    return function namedFunction() {
      alert("this is a named function");
    };
  }
  
  function returnsAnAnonymousFunction() {
    return () => "this function has no name G";
  }