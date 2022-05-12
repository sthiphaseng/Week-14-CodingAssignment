import React from "react";
import Movie from "./movie";

export default class MovieList extends React.Component {
    render() {

        let movies = [
            {
                title: "The Fast and the Furious: Tokyo Drift",
                image: "https://resizing.flixster.com/u-nSy9JIVlNgUtJ8Rm657crMxuk=/206x305/v2/https://flxt.tmsimg.com/assets/p159790_p_v8_ae.jpg",
                plot: "Steven Says: In the third installment of the F&F franchise, they finally got it right! Well, the underground Tokyo car scene at least. The storyline involves a troubled teenager that comes to terms with his insolence long enough to save the day. Hooray! But honestly, this movie is about the cars and the rise of the motorsport of drifting to the US audience. Sure the story is corny, but the reason you started watching this franchise was for the cars, and Toyko drift is it!",
                reviews: []
            },
            {
                title: "F9",
                image: "https://resizing.flixster.com/l5wClHduuFucc1IEKqmt-7o6koM=/206x305/v2/https://resizing.flixster.com/NfAVsQVHDPD58zEbNydGMzf7I_A=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzdhYTRiMjQ1LWMyMDctNGM1MC1iYzY3LWIzM2VhNmU0MTlkOC5qcGc=",
                plot: "Steven Says: The storyline is crazy, Tyrese and Ludacris fly into space, sometimes automobiles make an appeareance, and why do I keep watching?! I'm a glutton for punishment and I will keep watching whatever movies this franchise keeps pushing out..",
                reviews: []
            },
            {
                title: "The Fast and the Furious",
                image: "https://resizing.flixster.com/dNS6VxcsC8a7aWTJ3CWXJA7i_RI=/206x305/v2/https://flxt.tmsimg.com/assets/p27779_p_v8_aw.jpg",
                plot: "Steven Says: Ahh, classic! The movie that got me into cars and will always hold a spot in my heart. There's a reason I know almost all the lines in the movie... Because I've seen it a billion times! Must watch if you're a car enthusiast... Not so much if you're a professional movie critic.",
                reviews: []
            },
            {
                title: "POWER",
                image: "https://resizing.flixster.com/eeId-9TZo_QD1gvKalXYOQUi6Yo=/206x305/v2/https://flxt.tmsimg.com/assets/p10426936_b_v13_al.jpg",
                plot: "Steven Says: The modern day version of Game of Thrones, except instead of dragons, there are drugs... Lots of it! And instead of castles, there are cartels. Must Watch if you love constant betrayel, backstabbing, and the pursuit of POWER!",
                reviews: []
            }
        ]
        let arr;
        arr = movies.map( (movie, index ) => 
            <Movie title={movie.title} plot={movie.plot} reviews={movie.reviews} image={movie.image} key={index} />
        )
        

        return(
            <div>
                { arr }
            </div>
        )
    } 
}