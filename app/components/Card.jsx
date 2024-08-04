import Link from "next/link";

function Card({ movie }) {
    const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w220_and_h330_face";
    return (
        <div className="my-4 rounded-5">
            <Link href={"/movies/" + movie.id} className="text-decoration-none">
                <div
                    className="card rounded-5"
                    style={{
                        width: "19rem",
                    }}
                >
                    <img
                        className="card-img-top rounded-5 p-2"
                        src={IMAGE_BASE_URL + movie.poster_path}
                    />
                    <div className="card-body">
                        <h4 className="card-title  d-flex justify-content-center align-items-center title-font">
                            {movie.title}
                        </h4>
                        <hr></hr>
                        <p
                            className="card-text overflow-y-auto"
                            style={{
                                height: "120px",
                            }}
                        >
                            {movie.overview}
                        </p>
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default Card;
