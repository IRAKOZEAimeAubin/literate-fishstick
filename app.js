const app = Vue.createApp( {
    data () {
        return {
            showQuote: true,
            url: "https://www.starwars.com/",
            characters: [
                {
                    name: "Darth Vader",
                    order: "Sith",
                    picture: "assets/Darth Vader.jpg"
                },
                {
                    name: "Obi Wan Kenobi",
                    order: "Jedi",
                    picture: "assets/Obi Wan Kenobi.jpg"
                },
                {
                    name: "Darth Maul",
                    order: "Sith",
                    picture: "assets/Darth Maul.jpg"
                },
                {
                    name: "Yoda",
                    order: "Jedi",
                    picture: "assets/Yoda.jpg"
                },
            ],
            awesomeness: 0,
            x: 0,
            y: 0
        };
    },
    methods: {
        changeOrderAndName () {
            if ( this.characters[ 0 ].order === "Sith" && this.characters[ 0 ].name === "Darth Vader" && this.characters[ 0 ].picture === "assets/Darth Vader.jpg" ) {
                this.characters[ 0 ].order = "Jedi";
                this.characters[ 0 ].name = "Anakin Skywalker";
                this.characters[ 0 ].picture = "assets/Anakin Skywalker.jpg";
            } else {
                this.characters[ 0 ].order = "Sith";
                this.characters[ 0 ].name = "Darth Vader";
                this.characters[ 0 ].picture = "assets/Darth Vader.jpg";
            }
        },
        toggleShowQuote () {
            this.showQuote = !this.showQuote;
        },
        handleEvent ( e, data ) {
            console.log( e );
            if ( data ) {
                console.log();
            }
        },
        handleMouseMove ( e ) {
            this.x = e.offsetX;
            this.y = e.offsetY;
        }
    },
    computed: {
        onlyJedis () {
            return this.characters.filter( ( character ) => character.order === "Jedi" )
        }
    }
} );

app.mount( "#root" );