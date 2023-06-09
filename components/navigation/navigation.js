import Link from "next/link";

const Nav = () => {
    return(
        <nav>
            <ul className="flex justify-around bg-black">
                <li className=" hover:bg-blue-300 my-2 px-4 bg-blue-700 py-4  rounded-md font-bold text-white">
                    <Link href = "./">Home</Link>
                </li>
                <li className=" hover:bg-blue-300  my-2 px-4 bg-blue-700 py-4  rounded-md font-bold text-white">
                    <Link href = "./add-blog">Add Blog</Link>
                </li>
            </ul>
        </nav>
    )
}


export default Nav;