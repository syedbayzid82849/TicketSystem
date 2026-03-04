import { toast } from "react-toastify";

const Navbar = () => {
    const onNewTicket = () => {
        toast("Ticket Added to In Progress!");
    }
    // ["Home", "", "Changelog", "Blog", "Download", "Contact"]
    const navLinks = <>
        <li><a>Home</a></li>
        <li><a>FAQ</a></li>
        <li><a>Changelog</a></li>
        <li><a>Blog</a></li>
        <li><a>Contact</a></li>
    </>;

    return (
        <nav className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {navLinks}
                    </ul>
                </div>
                {/* Logo */}
                <div
                    style={{ fontWeight: 800, fontSize: 18, color: "#111827", letterSpacing: -0.5 }}
                >
                    Ticket System
                </div>            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                <button
                    onClick={onNewTicket}
                    style={{
                        background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                        color: "#fff",
                        border: "none",
                        borderRadius: 8,
                        padding: "10px",
                        fontWeight: 700,
                        fontSize: 14,
                        cursor: "pointer",
                    }}
                >
                    + New Ticket
                </button>
            </div>
        </nav>
    );
};

export default Navbar;