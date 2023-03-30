import { useSelector } from 'react-redux';

import { getAuth, getUser } from 'redux/auth/auth-selector';

import css from './main-page.module.scss';

const MainPage = () => {
  const { isLogin } = useSelector(getAuth);
  const { name } = useSelector(getUser);

  if (!isLogin) {
    return (
      <div className={css.container}>
        {/* <div className={css.main}> */}
        <h2 className={css.welcomeText}>
          Welcome, Visitor!
          <br /> This app is for storing your private contacts!
        </h2>
        {/* </div> */}
      </div>
    );
  }
  return (
    <div className={css.container}>
      <div className={css.welcomeText}>
        <h2>I'm glad to see you again, {name}!</h2>
        <p>You are already logged in and can view your contacts.</p>
      </div>
    </div>
  );
};

export default MainPage;
