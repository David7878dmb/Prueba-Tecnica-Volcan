import GoogleLoginButton from '../components/GoogleLoginButton'

function Login({ setUser }) {
  return (
    <div className='login'>
      <h1 className='inicia'>Inicia sesión con Google</h1>
      
      <GoogleLoginButton setUser={setUser} className="inicio_google" />
    </div>
  )
}

export default Login
