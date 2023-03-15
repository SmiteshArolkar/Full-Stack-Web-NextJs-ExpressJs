import Link from "next/link";

const Nav = () => {
    return(
        <nav>
            <ul className="flex justify-around">
                <li className=" hover:bg-blue-300 mx-2 my-2 px-4 bg-blue-700 py-4  rounded-md font-bold text-white">
                    <Link href = "./">Home</Link>
                </li>
            </ul>
        </nav>
    )
}


export default Nav;