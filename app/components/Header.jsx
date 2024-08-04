"use client";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
function Header() {
    const [query, setQuery] = useState("");
    const router = useRouter();
    function onQueryChange(e) {
        setQuery(e.target.value);
    }
    function searchClicked() {
        event.preventDefault();
        if (query.length < 1) return;
        if (query.length < 3) {
            alert("Atleast 3 characters required to search!!!!");
            return;
        }
        router.push("/search?query=" + query);
    }
    return (
        <div className="mb-4">
            <nav
                className="navbar bg-dark border-bottom border-body"
                data-bs-theme="dark"
            >
                <div className="container-fluid">
                    <Link
                        className="navbar-brand"
                        style={{ fontSize: "x-large" }}
                        href="/"
                    >
                        MovieSIMP
                    </Link>
                    <form className="d-flex" role="search">
                        <input
                            className="form-control me-2"
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                            value={query}
                            onChange={onQueryChange}
                        />
                        <button
                            className="btn btn-outline-success"
                            type="submit"
                            onClick={searchClicked}
                        >
                            Search
                        </button>
                    </form>
                </div>
            </nav>
        </div>
    );
}

export default Header;
