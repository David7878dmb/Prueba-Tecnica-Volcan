import { useNavigate } from 'react-router-dom'

function Home({ setUser }) {
  const navigate = useNavigate()
  const user = JSON.parse(localStorage.getItem('user'))

  const logout = () => {
    localStorage.removeItem('user')
    setUser(null)
    navigate('/')
  }

  return (
    <div className='login'>
      <h1 className='bienvenido'>Bienvenido, {user?.name}</h1>
      <img src={user?.picture} alt="Profile" style={{ borderRadius: '50%' }} />
      <br /><br />
      <button className='logout' onClick={logout}>Cerrar sesión</button>
    </div>
  )
}

export default Home
