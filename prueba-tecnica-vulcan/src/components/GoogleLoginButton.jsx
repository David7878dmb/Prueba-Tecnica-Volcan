import { GoogleLogin } from '@react-oauth/google'
import { jwtDecode } from 'jwt-decode'
import { useNavigate } from 'react-router-dom'

function GoogleLoginButton() {
  const navigate = useNavigate()

  const handleSuccess = (credentialResponse) => {
    const decoded = jwtDecode(credentialResponse.credential)
    localStorage.setItem('user', JSON.stringify(decoded))
    navigate('/home')
  }

  const handleError = () => {
    alert('Login con Google falló. Intenta de nuevo.')
  }

  return (
    <GoogleLogin
      onSuccess={handleSuccess}
      onError={handleError}
    />
  )
}

export default GoogleLoginButton
