import { AuthForm } from '../AuthForm/AuthForm';

const Login = () => {
  return (
    <div>
      <AuthForm email={true} password={true} />
    </div>
  );
};

export default Login;
