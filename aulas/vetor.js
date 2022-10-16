let vetor = [0, 5, 0, 6]
vetor.push('l', 'a')
console.log(`Nosso vetor é o ${vetor} contendo ${vetor.length} elementos.\nOrganizado em ordem crescente fica: ${vetor.sort()}`)

for (let e = 0; e < vetor.length; e++) {
    console.log(vetor[e])                //A variável e foi usado para substituir o número que vai no colchete do vetor vetor[variável]
}

for (let elemento in vetor) {
    console.log(vetor[elemento])
}

console.log(vetor.indexOf('l'))
console.log(vetor.indexOf(2))
