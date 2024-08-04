import { getTendingMovies } from "@/utils/requests";
import Card from "./components/Card";

export default async function HomePage() {
    const movies = await getTendingMovies();
    return (
        <div className="container-fluid m3">
            <h2 className="title-font text-dark">
                Top Trendings
                <hr style={{ width: "40%", color: "white" }}></hr>
            </h2>
            <div className="d-flex flex-wrap justify-content-around">
                {movies.map((movie) => {
                    return <Card movie={movie} key={movie.id}></Card>;
                })}
            </div>
        </div>
    );
}
