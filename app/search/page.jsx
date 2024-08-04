"use client";
import React, { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { getMovies } from "@/utils/requests";
import Card from "../components/Card"; // Make sure to import the Card component

function SearchedMovies() {
    const searchParams = useSearchParams();
    const search = searchParams.get("query");
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const moviesData = await getMovies(search);
                setMovies(moviesData);
            } catch (error) {
                alert("Error fetching searched movies: " + error);
            }
        };

        // Call the async function
        fetchMovies();
    }, [searchParams]);

    return (
        <div className="container-fluid m3">
            <h2 className="title-font text-dark">
                Search Results For : "{search}"
                <hr style={{ width: "40%", color: "white" }}></hr>
            </h2>
            <div className="d-flex flex-wrap justify-content-around">
                {movies && movies.length > 0 ? (
                    movies.map((movie) => <Card movie={movie} key={movie.id} />)
                ) : (
                    <div
                        className="mt-5 text-danger"
                        style={{ fontSize: "x-large" }}
                    >
                        No results found!!! Please try other keywords
                    </div>
                )}
            </div>
        </div>
    );
}

function SearchedMoviesWrapper() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <SearchedMovies />
        </Suspense>
    );
}

export default SearchedMoviesWrapper;
