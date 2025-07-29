import { GoogleLogin } from '@react-oauth/google'
import { jwtDecode } from 'jwt-decode'
import { useNavigate } from 'react-router-dom'

function GoogleLoginButton({ setUser }) {
  const navigate = useNavigate()

  const handleSuccess = (credentialResponse) => {
    const decoded = jwtDecode(credentialResponse.credential)
    localStorage.setItem('user', JSON.stringify(decoded))
    setUser(decoded)
    navigate('/home')
  }

  const handleError = () => {
    alert('Login con Google falló.')
  }

  return (
    <GoogleLogin
      onSuccess={handleSuccess}
      onError={handleError}
    />
  )
}

export default GoogleLoginButton
