Vue.component ('error', {
    data(){
        return {
           showError: false, 
           errorMessage: "",
        }
    },
    methods: {
        throwError(error) {
            this.errorMessage = error;
            this.showError = !this.showError;
        }
    },
    template: `
        <h1 v-show="showError">Ошибка:  {{errorMessage}}</h1>
    `
});