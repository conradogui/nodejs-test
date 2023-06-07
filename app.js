const leia = require('mclainsmt-cli-prompt')

const nome = leia('Digite seu nome: ')
const idade = leia('Digite sua idade: ')

console.log(`
[Cartão de aniversario]

Olá ${nome}!
Parabens pelos seus ${idade} anos!
`)

console.log('ola mundo!', params.join(', '))