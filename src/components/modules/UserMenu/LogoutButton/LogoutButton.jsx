import { useDispatch } from 'react-redux';

import { Button, SvgIcon } from '@mui/material';
import { LogoutRounded } from '@mui/icons-material';

import { logout } from 'redux/auth/auth-operations';

const LogoutButton = ({ children }) => {
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(logout());
    return;
  };
  return (
    <Button
      color="warning"
      sx={{
        padding: 0,
        fontSize: 14,
      }}
      onClick={onLogout}
    >
      {children}
      <SvgIcon>
        <LogoutRounded />
      </SvgIcon>
    </Button>
  );
};

export default LogoutButton;
