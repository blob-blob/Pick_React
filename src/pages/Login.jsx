import TungLayout from '../layouts/Tung';
import NaverButton from '../components/Login/NaverButton';

function Login() {
  return (
    <TungLayout>
      <h1>LOGIN</h1>
      <div className="flex flex-col items-center w-full space-y-4">
        <NaverButton />
      </div>
    </TungLayout>
  );
}

export default Login;
