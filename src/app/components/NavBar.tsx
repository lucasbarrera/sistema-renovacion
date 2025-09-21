
import Link from "next/link";

function NavBar() {

  return (
    <nav className="bg-gray-800 p-0.5 flex gap-6 justify-evenly ">
      <Link className="hover:bg-gray-700 rounded-xl py-1 px-4" href='/personal'>Personal</Link>
      <Link className="hover:bg-gray-700 rounded-xl py-1 px-4" href='/assistance'>Asistencia</Link>
      <Link className="hover:bg-gray-700 rounded-xl py-1 px-4" href='/trainings'>Capacitaciones</Link>
      <Link className="hover:bg-gray-700 rounded-xl py-1 px-4" href='/projects'>Proyectos</Link>
    </nav>
  );
}

export default NavBar;
