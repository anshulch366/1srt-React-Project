import logo from "@/public/img/logo.svg";

export default function Navbar() {
    const nav = [
        { name: "Home", href: "/", color: "text-gray-500" },
        { name: "Pages", href: "/pages", color: "text-gray-700" },
        { name: "Blog", href: "/blog", color: "text-gray-700" },
        { name: "Courses", href: "/courses", color: "text-gray-700" },
        { name: "Events", href: "/events", color: "text-gray-700" },
        { name: "Contact", href: "/contact", color: "text-gray-700" },
    ];
    return (

        <nav className="Nav-1st h-[100px] bg-white w-full flex justify-center items-center ">

            <div className="  w-[1200px] flex justify-between items-center ">

                <div className="nav-2nd flex justify-between w-[700px] items-center">


                    <div className="logo">
                        <img src={logo.src} alt="logo" />
                    </div>



                    <div className="nav-list flex gap-6 text-black ">
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


                </div>
                <div className="nav-buttonv px-[25px] py-[12px]  bg-blue-500 rounded-[25px]">
                    <button>Get Started</button>
                </div>
            </div>






        </nav>
    );
}




