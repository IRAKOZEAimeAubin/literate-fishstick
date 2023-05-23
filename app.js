const app = Vue.createApp( {
    data () {
        return {
            showQuote: true,
            name: "Darth Vader",
            order: "Sith",
            awesomeness: 0
        }
    },
    methods: {
        changeOrder () {
            if ( this.order === "Sith" ) {
                this.order = "Jedi"
            } else {
                this.order = "Sith"
            }
        },
        toggleShowQuote () {
            this.showQuote = !this.showQuote
        },
        handleEvent (e) {
            console.log(e)
        }
    }
});

app.mount("#root")