Vue.component('search', {
    data(){
        return {
            userSearch: '',
        }
    },
    methods: {
    },
    template: `
            <form action="#" class="search-form" @submit.prevent="$root.$refs.products.filter">
                <input type="text" class="search-field" v-model="userSearch">
                <button class="btn-search" type="submit">
                    <i class="fas fa-search"></i>
                </button>
            </form>`,
});