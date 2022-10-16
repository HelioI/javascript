function parimpar(n) {
    if (n % 2 == 0) {
        return 'par'
    } else {
        return 'ímpar'
    }
}

console.log(`O número 9 é ${parimpar(9)}!`)

function soma(n1=0, n2=0) {
    let resultado = n1 + n2
    return resultado
}

console.log(soma(11, 9))

let v = function(x) {
    return x*4
}

console.log(v(2))


//Forma tradicional
function fatorial(n) {
    let fat = 1
    for(let c = n; c > 1; c--) {
        fat *= c
    }
    return fat
}

// 5! = 5 x 4 x 3 x 2 x 1 = 120

console.log(fatorial(5))


//RECURSIVIDADE
function fator(n) {
    if (n == 1) {
        return 1
    } else {
        return n * fator(n-1)
    }
}

/*

5! = 5 x 4 x 3 x 2 x 1 = 120
5! = 5 x 4!

n! = n x (n-1)
1! = 1
*/

console.log(fator(4))