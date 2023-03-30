import { useDispatch } from 'react-redux';

import LoginForm from 'components/modules/LoginForm/LoginForm';

import { login } from 'redux/auth/auth-operations';

import css from './login-page.module.scss';

const LoginPage = () => {
  const dispatch = useDispatch();
  const handleSignup = data => {
    dispatch(login(data));
  };

  return (
    <div className={css.container}>
      <p className={css.text}>Please, enter your login data</p>
      <LoginForm onSubmit={handleSignup} />
    </div>
  );
};

export default LoginPage;
