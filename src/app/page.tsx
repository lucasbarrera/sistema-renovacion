export default function LandingPage() {
  return (
    <div className="landing-page">
      <div className="text">
      </div>
      <form action="" className="login-form">
        <h4 className="title-login">Ingresar</h4>
        <input className="input-login" type="email" placeholder="Ingresa tu correo electrónico" />
        <input className="input-login" type="password" placeholder="Ingresa tu contraseña" />
        <button className="button-login" type="submit" >Iniciar Sesión</button>
      </form>

    </div>
  );
}
