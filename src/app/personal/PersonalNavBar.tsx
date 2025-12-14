import Link from "next/link"

function PersonalNavBar() {
    return (
        <div className="side-bar">
            <Link className="side-link" href="/personal/search">buscar</Link>
            <Link className="side-link" href="/personal/add">agregar</Link>
            <Link className="side-link" href="/personal/edit">editar</Link>
        </div>
    )
}

export default PersonalNavBar
