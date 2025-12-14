import Link from "next/link";

function NavBar() {

  return (
    <nav className="navbar">
      <Link className="link" href='/personal'>Personal</Link>
      <Link className="link" href='/assistance'>Asistencia</Link>
      <Link className="link" href='/trainings'>Capacitaciones</Link>
      <Link className="link" href='/projects'>Proyectos</Link>
    </nav>
  );
}

export default NavBar;
