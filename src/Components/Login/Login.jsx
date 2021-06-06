import { AuthForm } from '../AuthForm/AuthForm';

const Login = ({ onLogin }) => {
  const handleAuth = ({ email, password }) => {
    // onLogin({ email, password });
    onLogin({
      email: 'test123456@mail.com',
      password: 'test123456',
    });
  };
  return (
    <div>
      <AuthForm cbAuth={handleAuth} />
    </div>
  );
};

export default Login;
