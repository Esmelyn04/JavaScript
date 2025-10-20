let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 
                        'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];


secretMessage.pop()
// console.log(secretMessage)

console.log(secretMessage.length)
// 24

secretMessage.push('to', 'Program')
// console.log(secretMessage)

// find index of 'easily'
console.log(secretMessage.indexOf('easily'))
// 7

secretMessage[7] = 'right'
// console.log(secretMessage)

secretMessage.shift()
// console.log(secretMessage)

secretMessage.unshift('Programming')
// console.log(secretMessage)

secretMessage.splice(6, 5, 'know,')
// console.log(secretMessage)

console.log(secretMessage.join(' '));