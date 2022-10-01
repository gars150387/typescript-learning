type Operation = 'multiply' | 'add' | 'divide';
type Result = number

const calculator = (a:number,b:number,op:Operation): Result => {
    if( op == 'multiply') return a * b

    if ( op === 'add') return a + b
    
    if ( op === 'divide'){
        if ( b === 0 ) throw new Error('can not divide by 0')

        return a / b
    }

    throw new Error('Operation is not valid')
}


console.log(process.argv)

// console.log(calculator( 5 , 9, 'add'))
// console.log(calculator( 152000 , 7849, 'divide'))
// console.log(calculator( 5 , 9, 'add'))
// console.log(calculator( 0 , 9, 'multipas'))