var numero = [15, 8, 90, 75, 102, 6, 2]
let maior = numero[0];
let menor = numero[0];
for (let i = 1; i < numero.length; i++) {
    if (numero[i] > maior) {
        maior = numero[i];
    } if (numero[i] < menor) {
        menor = numero[i];
    }
}
console.log(`O maior número é ${maior}`);
console.log(`O menor número é ${menor}`);
