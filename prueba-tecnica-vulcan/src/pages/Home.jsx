import { useNavigate } from 'react-router-dom'

function Home() {
  const navigate = useNavigate()
  const user = JSON.parse(localStorage.getItem('user'))

  const logout = () => {
    localStorage.removeItem('user')
    navigate('/')
  }

  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <h1>Bienvenido, {user?.name}</h1>
      <img src={user?.picture} alt="Profile" style={{ borderRadius: '50%' }} />
      <br /><br />
      <button onClick={logout}>Cerrar sesión</button>
    </div>
  )
}

export default Home
