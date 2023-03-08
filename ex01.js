var somaf = 0;
var maisalto = 0;
var maisbaixo = 0;
var somaaltura = 0;
var somam = 0;
for (var i =1; i < 4; i++) {
    var sexo = prompt('Qual seu sexo M/F');
    var altura = parseFloat(prompt('Qual sua altura? '));
    if (sexo.toLowerCase() == 'm') {
        somaaltura += altura;
        somam++;
    }
    if (sexo.toLowerCase() == 'f') {
        somaf++;
    }
    if (i == 1) {
        maisalto = altura;
        maisbaixo = altura;
    }
    if (altura > maisalto) {
        maisalto = altura;
    }
    if (altura < maisbaixo) {
        maisbaixo = altura
    }
}
var media = somaaltura/somam;
alert(`A média de altura dos homens é : ${media.toFixed(2)} metro(s)`);
alert(`O total de mulheres é:  ${somaf}`);
alert(`A pessoa mais alta mede: ${maisalto.toFixed(2)} metro(s)`);
alert(`A pessoa mais baixa mede: ${maisbaixo} metro(s)`)