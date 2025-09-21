import Link from "next/link"

function PersonalNavBar() {
    return (
        <div className="bg-gray-600 p-0.5 flex  justify-evenly ">
            <Link href='/personal/search'>buscar</Link>
            <Link href='/personal/create'>agregar</Link>
            <Link href='/personal/viewAll'>ver todos</Link>
        </div>
    )
}

export default PersonalNavBar
