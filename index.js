const R = require('ramda');

const fizzbuzz = (num) => {
    const moduleOperator = (a) => (b) => b % a;
    
    const divisibleBy3 = R.compose(R.equals(0), moduleOperator(3));
    const divisibleBy5 = R.compose(R.equals(0), moduleOperator(5));
    
    const fn = R.cond([
        [R.both(divisibleBy3, divisibleBy5), R.always('fizz buzz')],
        [divisibleBy3, R.always('fizz')],
        [divisibleBy5, R.always('buzz')],
        [R.T, temp => 'default ']
    ]);
    
    return fn(num);
};

fizzbuzz(15);//fizz buzz
fizzbuzz(5); //buzz
fizzbuzz(3); //fizz