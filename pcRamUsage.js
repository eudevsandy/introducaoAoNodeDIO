const os = require('os'); // declara o método os

setInterval(() => { // o método setInterval faz com que tenhamos respostas em tempo real
const { platform, arch, totalmem, freemem } = os; // declara quais informações deseja receber pois há mtttts informações no método os
const tRam = totalmem() / 1024 / 1024; // trata constante para que retorne Megabyte e não byte
const fRam = freemem() / 1024 / 1024; // trata constante para que retorne Megabyte e não byte
const usage = (fRam / tRam) * 100; // constante que indica quanto de memória está em uso

const stats = { // Desestrutura o método, mostrando quais informações deseja receber
	OS: platform(),
	Arch: arch(),
	TotalRAM: "${parseInt{tRam}} MB", // string
	FreeRAM: "${parseInt{fRam}} MB",
	Usage: `${usage.toFixed(2)}%` // Fixa o número em 2 algoritmos após vírgula
}
console.clear(); // Impede que o terminal retorne infinitamente
console.table(stats); // O .table transforma os dados de retorno em uma tabela
exports.stats = stats; // Exportação do módulo stats, criado para este projeto, que recebe o objeto stats criado acima - Usado para que o retorno apareça no navegador
}, 1000)