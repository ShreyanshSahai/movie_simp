import { getMovieDetails, getSimilarMovies } from "@/utils/requests";
import Card from "@/app/components/Card";

async function MovieDetailsPage({ params }) {
    const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w220_and_h330_face";
    const movieDetails = await getMovieDetails(params.id);
    const similarMovies = await getSimilarMovies(params.id);
    console.log(movieDetails);
    return (
        <div className="mx-5">
            <div className="row d-flex align-items-center mb-5">
                <div className="col-sm-12 col-md-3">
                    <img
                        src={
                            movieDetails.backdrop_path
                                ? IMAGE_BASE_URL + movieDetails.backdrop_path
                                : movieDetails.poster_path
                        }
                        className="rounded-5"
                        style={{
                            boxShadow:
                                "0 10px 18px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                            width: "20vw",
                            minWidth: "120px",
                        }}
                    ></img>
                </div>
                <div className="text-centre col">
                    <h2 className="title-font mt-3" style={{ width: "100%" }}>
                        {movieDetails.title}
                    </h2>
                    <hr></hr>
                    <div
                        className="d-flex align-items-center flex-wrap"
                        style={{ width: "100%", marginTop: "2%" }}
                    >
                        <span
                            className="px-2 py-1 bg-warning rounded-2"
                            style={{
                                textAlign: "center",
                                color: "black",
                                marginRight: "2%",
                            }}
                        >
                            {movieDetails.release_date}
                        </span>
                        <span
                            className="px-2 py-1 bg-warning rounded-2"
                            style={{
                                textAlign: "center",
                                color: "black",
                                marginRight: "2%",
                            }}
                        >
                            {movieDetails.original_language}
                        </span>
                        <span
                            className="px-2 py-1 bg-warning rounded-2"
                            style={{
                                textAlign: "center",
                                color: "black",
                                marginRight: "2%",
                            }}
                        >
                            {movieDetails.status}
                        </span>
                    </div>
                    <div
                        className="d-flex align-items-center flex-wrap"
                        style={{ width: "100%" }}
                    >
                        <div style={{ width: "100%", margin: "2% 0" }}>
                            {movieDetails.genres
                                .sort(
                                    (firstItem, secondItem) =>
                                        firstItem.name.length -
                                        secondItem.name.length
                                )
                                .map((gen) => {
                                    return (
                                        <span
                                            className="px-2 py-1 bg-success rounded-2"
                                            style={{
                                                textAlign: "center",
                                                color: "white",
                                                marginRight: "2%",
                                                textWrap: "nowrap",
                                            }}
                                        >
                                            {gen.name}
                                        </span>
                                    );
                                })}
                        </div>
                    </div>
                    <div
                        className="d-flex align-items-center"
                        style={{ width: "100%", marginTop: "1%" }}
                    >
                        {movieDetails.overview}
                    </div>
                </div>
            </div>
            <div className="container-fluid m3">
                <h2 className="title-font text-dark">
                    Similar Movies
                    <hr style={{ width: "40%", color: "white" }}></hr>
                </h2>
                <div className="d-flex flex-wrap justify-content-around">
                    {similarMovies.map((movie) => {
                        return <Card movie={movie} key={movie.id}></Card>;
                    })}
                </div>
            </div>
        </div>
    );
}

export default MovieDetailsPage;
