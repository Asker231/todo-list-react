
import { useSelector } from 'react-redux'

const Auth = () => {
    const {email,id} = useSelector(state=>state.auth);
  return{
     isAuth:!!email,
     email,
     id,
  }
}

export default Auth;