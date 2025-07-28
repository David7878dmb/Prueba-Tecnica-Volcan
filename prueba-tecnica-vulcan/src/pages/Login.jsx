import GoogleLoginButton from '../components/GoogleLoginButton'

function Login({ setUser }) {
  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <h1>Inicia sesión con Google</h1>
      <GoogleLoginButton setUser={setUser} />
    </div>
  )
}

export default Login
