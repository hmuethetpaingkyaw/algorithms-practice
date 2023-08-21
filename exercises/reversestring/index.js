// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    // solution 1
    // let reversed = '';
    // str.split('').forEach(element => {
    //     reversed = element + reversed 
    // });
    // return reversed;

    //solution 2
    // return str.split('').reverse().join('')

    /// solution 3 
    return str.split('').reduce((prev, next)=> {
        return next + prev
    }, '')
}

module.exports = reverse;
