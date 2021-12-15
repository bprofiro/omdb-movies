import { createContext, PropsWithChildren, useCallback, useState } from 'react';

import { v4 as uuidv4 } from 'uuid';
import { useHistory } from 'react-router-dom';
import { api } from '@services/api';
import { showError, storageKey } from '@utils';
import { AxiosResponse } from 'axios';

interface UserProps {
  id: string;
  name: string;
  email: string;
}

interface AuthState {
  token: string;
  user: UserProps;
}

type SignInRequest = {
  email: string;
  password: string;
};

interface AuthContextData {
  user: UserProps;
  signIn: (data: SignInRequest) => Promise<void>;
  signOut: () => void;
}

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData,
);

export function AuthProvider({ children }: PropsWithChildren<unknown>) {
  const history = useHistory();

  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem(storageKey('token'));
    const storedUser = localStorage.getItem(storageKey('user'));

    if (token && storedUser) {
      return { token, user: JSON.parse(storedUser) };
    }

    return {} as AuthState;
  });

  const signIn = useCallback(
    async ({ email, password }: SignInRequest) => {
      try {
        const token = uuidv4();

        const response: AxiosResponse<AuthState> = await api.post('/signin', {
          email,
          password,
        });

        localStorage.setItem(storageKey('token'), token);

        setData({ token: response.data.token, user: response.data.user });

        history.push('/dashboard');
      } catch ({ response }) {
        showError(response);
      }
    },
    [history],
  );

  const signOut = useCallback(() => {
    localStorage.removeItem(storageKey('token'));

    setData({} as AuthState);
    history.push('/');
  }, [history]);

  return (
    <AuthContext.Provider value={{ signIn, user: data.user, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}
