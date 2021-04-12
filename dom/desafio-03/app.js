new Vue({
    el: '#desafio',
    data: {
        valor: 0
    },
    computed: {
        resultado: function() {
            return this.valor == 37 ? "Valor igual" : "Valor diferente"; 
        }
    },
    watch: {
        resultado: function () {
            console.log('OK');
            if(this.valor == 37) {
                setTimeout(() => {
                    this.valor = 0;
                },5000)
            }
        }
    }
});