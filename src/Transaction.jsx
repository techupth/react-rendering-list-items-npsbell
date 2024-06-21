import "./App.css";
import { movies } from "../src/data/movies";

const Transaction = () =>{
    return(
        <div>
            {
                movies.map((item, index) => {
                    return(
                        <div key={index} className="item-list">
                            <div className="movie-image">
                                <img src={item.image}></img>
                            </div>
                            <div className="movie-detail">
                                <div className="detail">Title: {item.title}</div>
                                <div className="detail">Year: {item.year}</div>
                                <div className="detail">Runtime: {item.runtime}</div>
                                <div className="movie-genres">
                                Genres: {item.genres.map((Genres, id) => {
                                    return(
                                        <div key={id} className="movie-Genres">
                                            {Genres}
                                        </div>
                                    )
                                }
                                )
                                }
                            </div>
                            <div>IMDB Ratings: {item.imdbRating}</div>
                            <div>IMDB Votes: {item.imdbVotes}</div>
                            </div>
                        </div>
                    )
                }
                
                )
            }
        </div>
    )
}

export default Transaction
