import Link from "next/link"

function AssistanceNavBar() {
    return (
        <div>
            <Link href='/assistance/viewRegister'>Ver Registros</Link>
            <Link href='/assistance/entry'>Entrada</Link>
            <Link href='/assistance/exit'>Salida</Link>
        </div>
    )
}

export default AssistanceNavBar
