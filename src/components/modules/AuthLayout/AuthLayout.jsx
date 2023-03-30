import { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import { currentUser } from 'redux/auth/auth-operations';

const AuthLayout = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(currentUser());
  }, [dispatch]);

  return <>{children}</>;
};

export default AuthLayout;
