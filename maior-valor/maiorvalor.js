/* Escreva um programa que leia 8 valores inteiros positivos, um de cada vez. Encontre e escreva o maior deles: */

function maiorNum() {

    let cont = 1;
    let maiorNum = null;
    while(cont <= 8) {

        let num = Number(prompt(`Digite o número ${cont} de 8 (somente positivos): `));

        if(maiorNum === null || maiorNum < num) {

            maiorNum = num;
        }

        cont++;
    }

    alert(`O maior número foi ${maiorNum}`);
}

maiorNum();