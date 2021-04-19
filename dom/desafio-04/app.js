new Vue({
	el: '#desafio',
	data: {
		class1Interval : '',
		classe1 : 'destaque',
		efeito1: true,
		classe3:'',
		classe4:'',
		cor1:'',
		efeito :{
			'width': '100px !important',
			'height': '100px',
			'border-radius': '100%',
		},
		progressId: '',
		barr: 0,
		progress: {
			'margin': '20px',
			'border-radius': '5px',
			'border': '1px solid 73AD21',
			'height': '18px',
			'background-color': '#73AD21',
			'padding': '5px 0px'
		},

	},
	methods: {
		iniciarEfeito() {
			this.class1Interval = setInterval( () => { 
				this.classe1 = (this.classe1 === 'destaque') ? 'encolher' : 'destaque';
			}, 1000);
		},
		pararEfeito() {
			clearInterval(this.class1Interval);
		},
		setEfeito1(event) {
			if(event.target.value === 'true'){
				this.efeito1 = true;
			} else if(event.target.value === 'false') {
				this.efeito1 = false;
			}
		},
		iniciarProgresso() {
			this.progressId = setInterval( () => { 
				if(this.barr >= 500){
					clearInterval(this.progressId);
				} else {
					this.barr = this.barr + 10;
					this.updateProg();
				}
			}, 100);
		},
		iniciarRegresso() {
			this.progressId = setInterval( () => { 
				if(this.barr > 0){
					this.barr = this.barr - 10;
				} else {
					clearInterval(this.progressId);
					this.updateProg();
				}
			}, 100);
		},
		updateProg(){
			return (this.barr > 0) ? Math.round( (this.barr/500 * 100) )  : 0;
		}
	},
	computed: {
		
	}
})
