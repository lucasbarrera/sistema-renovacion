import React, { useState } from 'react'

function CreatePersonal() {

    const [name, setName] = useState<string>()
    const [lastName, setLastName] = useState<string>()
    const [dni, setDni] = useState<number>()
    const [phone, setPhone] = useState<number>()
    const [email, setEmail] = useState<string>()
    const [adress, setAdress] = useState<string>()

    const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        const res = await fetch('/api/personal', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, lastName, dni, phone, email, adress })
        })

        if (res.ok) {
            cleanForm()
            alert('Personal creado con exito')
            const data = await res.json()
            console.log(data)
        }
    }

    const cleanForm = () => {
        setName('')
        setLastName('')
        setDni(undefined)
        setPhone(undefined)
        setEmail('')
        setAdress('')
    }

    return (
        <div>
            <form className='flex flex-col items-center justify-center w-full h-full'
                action=""
            >
                <input type="text"
                    name="name"
                    placeholder='Name'
                    onChange={(e) => setName(e.target.value)}
                    value={name} />
                <input type="text"
                    name="lastName"
                    placeholder='Last Name'
                    onChange={(e) => setLastName(e.target.value)}
                    value={lastName} />
                <input type="text"
                    name="dni"
                    placeholder='DNI'
                    onChange={(e) => setDni(Number(e.target.value))}
                    value={dni} />
                <input type="text"
                    name="phone"
                    placeholder='Phone'
                    onChange={(e) => setPhone(Number(e.target.value))}
                    value={phone} />
                <input type="email"
                    name="email"
                    placeholder='Email'
                    onChange={(e) => setEmail(e.target.value)}
                    value={email} />
                <input type="text"
                    name="adress"
                    placeholder='Adress'
                    onChange={(e) => setAdress(e.target.value)}
                    value={adress} />
                <button onClick={(e) => handleSubmit(e)}>Enviar</button>
            </form>
        </div>
    )
}

export default CreatePersonal