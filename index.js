const R = require('ramda');

const fizzbuzz = (num) => {
    const moduleOperator = (a) => (b) => b % a;
    
    const fn = R.cond([
        [R.compose(R.equals(0), moduleOperator(3)), R.always('fizz')],
        [R.compose(R.equals(0), moduleOperator(5)), R.always('buzz')],
        [R.and(R.compose(R.equals(0), moduleOperator(5)), R.compose(R.equals(0), moduleOperator(3))), R.always('fizz buzz')],
        [R.T, temp => 'default ']
    ]);
    
    return fn(num);
};

console.log(fizzbuzz(15));