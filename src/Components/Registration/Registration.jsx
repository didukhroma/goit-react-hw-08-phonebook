import { AuthForm } from '../AuthForm/AuthForm';

const Registration = () => {
  const handleAuth = data => {
    console.log(data);
  };
  return (
    <div>
      <AuthForm text={true} email={true} password={true} cbAuth={handleAuth} />
    </div>
  );
};

export default Registration;
