/** Jonathan Alexander Popham **/
/**     January 21, 2016      **/
/** jonathan.popham@gmail.com **/

var n, app;

n = parseInt(process.argv[2]); 

app = ( function () {
  return {

    secret : function (n){
      return n;
    },

    sieve: function (n){
      
        var a, i, j;
        var primes =[];
        a = [];
      
        for (i = 2; i < n; i+=1) primes[i] = true;

        for (i = 2; (i * i) < n; i += 1) {
          if (primes[i]) {
            for (j = 0; (i * i) + (i * j) < n; j += 1) {
              primes[(i * i) + (i * j)] = false;
            }
          }
        }

        for (i = 2; i < n; i+=1) {
          if (primes[i]) {
            a.push(i);
          }
        }
        return a;
    },

    isAdditive: function (sieve, secret){

      var i, j;
      for (i = 0; i < sieve.length; i += 1) {
        for (j = i + 1; j < sieve.length; j += 1){
          if(sieve[i] + sieve[j] === secret){
            return true;
          }
        }
      }
    },

    init: function (n){

      var secretValue, primeList;

      secretValue = app.secret(n);
      primeList = app.sieve(secretValue);

      if (app.isAdditive(primeList, secretValue)){
        console.log("secret() is additive");
      } else {
        console.log("secret() is not additive");
      }
    }
  };

}());

app.init(n);