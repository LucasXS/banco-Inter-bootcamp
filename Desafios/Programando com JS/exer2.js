let lines = gets().split('\n');

let n = parseInt(lines.shift());
for (let i = 1; i < 10000; i++) {
	if (i % n ===2) console.log(i) 
}