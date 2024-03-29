import React from 'react'

const MovieHeader = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-warning">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#"><b>Movies</b></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link" href="/">Add Movie</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/search">Search Movie</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/view">View Movies</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default MovieHeader
