window.onload = function () {
	new Vue({
		el: '#app',
		data: {
			show: true,
			cores: ['azul','branco','fúscia','grená','índigo','laranja','marrom','ocre','preto','rosa','salmão', 'verde'],
			array: ['Pedro', 'Bia', 'Ana', 'Rebeca'],
			livro: {
				titulo: 'O Senhor dos Anéis',
				autor: 'J.R.R. Tolkiens',
				volume: '3'
			},
			aluno: {
				id: 10,
				nome: 'Maria',
				notas: [7.67, 8.33, 6.98, 9.21]
			}
		} 
	});
}
