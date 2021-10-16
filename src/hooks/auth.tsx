/* eslint-disable @typescript-eslint/ban-types */
import React, { useState } from 'react';

import api from '../services/api';

interface AuthState {
    token: string;
    user: object;
}

interface SignInCredentials {
    email: string;
    password: string;
}

interface AuthContextData {
    user: object;
    signIn: ({ email, password }: SignInCredentials) => Promise<void>;
    signOut: () => void;
}

const AuthContext = React.createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
	const [data, setData] = useState<AuthState>(() => {
		const token = localStorage.getItem('@app:token');
		const user = localStorage.getItem('@app:user');

		if (token && user) {
			return {
				token,
				user: JSON.parse(user)
			};
		}

		return {} as AuthState;
	});

	const signIn = React.useCallback(async ({ email, password }) => {
		const response = await api.post<any>('/sessions', {
			email,
			password,
		});

		const { token, user } = response.data;

		localStorage.setItem('@app:token', token);
		localStorage.setItem('@app:user', JSON.stringify(user));

		setData({ token, user });
	}, []);

	const signOut = React.useCallback(() => {
		localStorage.removeItem('@app:token');
		localStorage.removeItem('@app:user');

		setData({} as AuthState);
	}, []);

	return (
		<AuthContext.Provider value={{ signOut, signIn, user: data.user }}>
			{children}
		</AuthContext.Provider>
	);
};

function useAuth(): AuthContextData {
	const context = React.useContext(AuthContext);

	if (!context) {
		throw new Error('useAuth must be used within a AuthProvider');
	}

	return context;
}

export { AuthProvider, useAuth };
