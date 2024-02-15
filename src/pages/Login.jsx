import TungLayout from '../layouts/Tung';
import NaverButton from '../components/Login/NaverButton';

function Login() {
  return (
    <TungLayout>
      <div className="flex flex-col items-center justify-between min-h-screen py-6">
        <h1 className="self-center mt-[40%] italic font-bold text-purple">Pick</h1>
        <div className="mb-12">
          <NaverButton />
        </div>
      </div>
    </TungLayout>
  );
}

export default Login;
