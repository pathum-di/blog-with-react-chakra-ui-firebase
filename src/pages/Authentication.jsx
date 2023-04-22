import { useSearchParams } from 'react-router-dom';
import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';

export default function Authentication() {
  const [searchParams] = useSearchParams();
  const isLogin = searchParams.get("mode") === "login";
  return (
    isLogin ? <SignIn /> : <SignUp />
  )
}