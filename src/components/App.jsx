import { Provider } from 'react-redux';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor } from 'redux/store';

import PrivateRoute from './modules/PrivateRoute/PrivateRoute';
import PublicRoute from './modules/PublicRoute/PublicRoute';

import AuthLayout from './modules/AuthLayout/AuthLayout';
import Loader from './shared/components/Skeleton/Loader';

const Navigation = lazy(() => import('./modules/Navigation/Navigation'));
const MainPage = lazy(() => import('../pages/MainPage/MainPage'));
const LoginPage = lazy(() => import('../pages/LoginPage/LoginPage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage/RegisterPage'));
const ContactsPage = lazy(() => import('../pages/ContactsPage/ContactsPage'));

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AuthLayout>
          <BrowserRouter basename="/goit-react-hw-08-phonebook">
            <Suspense fallback={<Loader />}>
              <Navigation />
              <Routes>
                <Route path="/" element={<MainPage />} />
                <Route element={<PublicRoute />}>
                  <Route path="/login" element={<LoginPage />} />
                  <Route path="/register" element={<RegisterPage />} />
                </Route>
                <Route element={<PrivateRoute />}>
                  <Route path="/contacts" element={<ContactsPage />} />
                </Route>
                <Route path="*" element={<MainPage />} />
              </Routes>
            </Suspense>
          </BrowserRouter>
        </AuthLayout>
      </PersistGate>
    </Provider>
  );
};

export default App;
