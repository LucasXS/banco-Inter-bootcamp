let lines = gets(10000).split('\n');

var N = parseInt(lines.shift());
for (let i = 1; i <=N; i++) {
	if (i %2 === 0) console.log(`${i}^2 = ${i**2}`);    //escreva sua lógica nos espaços em branco
}