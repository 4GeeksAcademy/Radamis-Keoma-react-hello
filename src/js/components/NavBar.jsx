import React from "react";

export default function NavBar() {
    return (
        <nav className="navbar bg-dark bg-gradient">

            <div className="container-fluid">
                <a className="navbar-brand text-white" href="#">
                    Start Bootstrap
                </a>
                <ul className="nav justify-content-end">
                    <li className="nav-item">
                        <a className="nav-link active text-white" aria-current="page" href="#">Active</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-white" href="#">Link</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-white" href="#">Link</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-white" href="#">Disabled</a>
                    </li>
                </ul>

            </div>

        </nav>
    );
};