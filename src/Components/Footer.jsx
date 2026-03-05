const Footer = () => {
    const columns = [
        {
            title: "Company",
            links: ["About Us", "Our Mission", "Contact Sales"],
        },
        {
            title: "Services",
            links: ["Products & Services", "Customer Stories", "Download Apps"],
        },
        {
            title: "Information",
            links: ["Privacy Policy", "Terms & Conditions", "Join Us"],
        },
        {
            title: "Social Links",
            links: [
                "𝕏  @CS — Ticket System",
                "in  @CS — Ticket System",
                "f  @CS — Ticket System",
                "✉  support@cst.com",
            ],
        },
    ];

    return (
        <footer className="bg-gray-900 text-gray-400 px-6 pt-12 pb-6">
            <div className="container mx-auto">

                {/* Footer Grid */}
                <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-8">

                    {/* Brand Column */}
                    <div className="col-span-2">
                        <h3 className="text-white font-extrabold text-lg mb-4">
                            CS — Ticket System
                        </h3>
                        <p className="text-sm leading-relaxed">
                            Your one-stop platform for managing customer support tickets.
                            Track issues, resolve problems, and keep your customers happy —
                            all in one place.
                        </p>
                    </div>

                    {/* Link Columns */}
                    {columns.map((col) => (
                        <div key={col.title}>
                            <h4 className="text-white font-bold text-sm mb-4">
                                {col.title}
                            </h4>
                            {col.links.map((link) => (
                                <p
                                    key={link}
                                    className="text-sm mb-2 cursor-pointer hover:text-white transition-colors duration-200"
                                >
                                    {link}
                                </p>
                            ))}
                        </div>
                    ))}
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-700 pt-5 text-center text-sm">
                    © 2024 CS — Ticket System. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;