export default function Navul() {
    const nav = [
        { name: "Home", href: "/", color: "text-gray-500" },
        { name: "Pages", href: "/pages", color: "text-gray-700" },
        { name: "Blog", href: "/blog", color: "text-gray-700" },
        { name: "Courses", href: "/courses", color: "text-gray-700" },
        { name: "Events", href: "/events", color: "text-gray-700" },
        { name: "Contact", href: "/contact", color: "text-gray-700" },
    ];
    return (




        <div className="nav-list  gap-6 text-black flex max-[800px]:flex-col max-[800px]:bg-white max-[800px]:w-32 max-[800px]:items-center max-[800px]:fixed max-[800px]:top-25 max-[800px]:right-5">
            {
                nav.map((key, index) => {
                    return (
                        <a
                            key={index}
                            href={key.href}
                            className={`gap-5 ${key.color}`}>

                            {key.name}
                        </a>
                    );

                })

            }


        </div>
    )
}