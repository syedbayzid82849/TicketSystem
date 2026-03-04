import React, { useState } from "react";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="navbar">
            <div className="navbar-brand">CS — Ticket System</div>
            <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                ☰
            </button>
            <div className={`navbar-menu ${menuOpen ? "open" : ""}`}>
                <a href="#home">Home</a>
                <a href="#faq">FAQ</a>
                <a href="#changelog">Changelog</a>
                <a href="#blog">Blog</a>
                <a href="#download">Download</a>
                <a href="#contact">Contact</a>
                <button className="btn-new-ticket">+ New Ticket</button>
            </div>
        </nav>
    );
};

export default Navbar;