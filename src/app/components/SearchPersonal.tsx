'use client'
import { personal } from "@/libs/types"
import { useState } from "react"

function SearchPersonal() {
    const [personal, setPersonal] = useState<personal[]>()
    const [dni, setDni] = useState<string>()
    const [lastName, setLastName] = useState<string>()
    const [searched, setSearched] = useState(true)

    const search = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        try {
            if (dni) {
                const res = await fetch(`http://localhost:3000/api/personal?dni=${dni}`)
                const data = await res.json()
                setPersonal(data)
                console.log(data)
            } else {
                const res = await fetch(`http://localhost:3000/api/personal?lastName=${lastName}`)
                const data = await res.json()
                setPersonal(data)
                console.log(data)
            }
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div>
            <form onSubmit={search}>
                <input
                    type="number"
                    value={dni}
                    onChange={(e) => setDni(e.target.value)}
                    placeholder="DNI"
                />
                <input
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder="Aplellido"
                />
                <button >Buscar</button>
            </form>
            {personal && personal.length > 0 ? (
                <div>
                    <h2>Resultados:</h2>
                    {personal.map((p) => (
                        <div key={p.id}>
                            <p>Nombre: {p.name} {p.lastName}</p>
                            <p>Email: {p.email}</p>
                            <p>DNI: {p.dni}</p>
                            <p>Dirección: {p.address}</p>
                            <p>Teléfono: {p.phone}</p>
                        </div>
                    ))}
                </div>
            ) : (personal?.length === 0 ?
                <div>
                    <p>No se encontraron resultados</p>
                </div> : null
            )}
        </div>
    )
}

export default SearchPersonal
