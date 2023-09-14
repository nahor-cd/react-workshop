import React from 'react'

const Navigation = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#"><b>Employee</b></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link" href="/">Add Employee</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/search">Search Employee</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/view">View Employee</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/delete">Delete Employee</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navigation