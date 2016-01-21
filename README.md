# Secret()

“You are given a function 'secret()' that accepts a single integer parameter and returns an integer.
In your favorite programming language, write a command-line program that takes one command-line argument (a number)
and determines if the secret() function is additive [secret(x+y) = secret(x) + secret(y)],
for all combinations x and y, where x and y are all prime numbers less than the number passed via the command-line argument.
Describe how to run your examples.”

### How to run this example:

* Install node. Node can be downloaded [here](https://nodejs.org/en/download/)
* git clone this repository
* use your command line interface to navigate to the directory secret.<span></span>js is saved in

To check to see if secret is additive use:

```
node secret.js "value"
```
Replace "value" with the input you will be checking.

```
// example inputs
node secret.js 1000
node secret.js 1000000
```

Secret.<span></span>js will find all of the primes less than your number,
then check to see if any combinations of those primes equal the original value inputted.

Secret.<span></span>js only accepts one paramater at a time.

If any combinations are additive, secret will print out "secret() is additive".

If no combinations are additive, then secret will print out "secret() is not additive".