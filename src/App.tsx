import { useEffect } from "react";

import { createBrowserRouter, createRoutesFromElements, Navigate, Route, RouterProvider } from 'react-router-dom';

import './App.scss';

import InvertionView from './pages/invertion';
import FonsetView from './pages/fonset';
import CooperationView from './pages/cooperation';
import { useAuth } from './context/authContext';

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route>
			<Route path="/" element={<Navigate to="/invertion" />} />
			<Route path="/invertion" element={<InvertionView />} />
			<Route path="/fonset" element={<FonsetView />} />
			<Route path="/cooperation" element={<CooperationView />} />
		</Route>
	)
);

function App() {

	const {
		setToken,
		setUser,
		setIsLoggedIn,
		setIsLoading,
		isLoggedIn,
		user,
		handleLogout,
		isLoading,
		setAuthorities,
		token
	} = useAuth();


	const getAuthCode = (clientId: any) => {
		window.location.href = `https://susitest.fiscalia.gov.co/sso/oauth/authorize?client_id=${clientId}&response_type=code&redirect_uri=http://localhost:3001/`; //desarrollo
		//window.location.href = `https://susitest.fiscalia.gov.co/sso/oauth/authorize?client_id=${clientId}&response_type=code&redirect_uri=http://satelite-qa-front.apps.dev.ocp.fiscalia.col/`;
	}

	useEffect(() => {

		// Verificar si el usuario ya está en el contexto
		if (user && Object.keys(user).length > 0) {
			setIsLoggedIn(true);
			setIsLoading(false);
			return; // No es necesario continuar con la autenticación
		}

		async function authorize() {


			const queryString = window.location.search
			const param = new URLSearchParams(queryString)
			const codeValue = param.get('code')


			//creamos peticion al back para traer clienId y secret
			const secretFrontend = "cocodrillo" //process.env.CREDENTIAL_FRONTEND

			const urlOurBackend = "http://localhost:3001/auth/getCredentials" //backend en desarrollo
			// const urlOurBackend = `${API_HOST}/auth/getCredentials` //real backend en Qa

			const response: any = await fetch(
				urlOurBackend,
				{
					headers: {
						Authorization: `Bearer ${secretFrontend}`,
					},
				}
			);


			const client_id = response.data[0]
			const clientSecret = response.data[1]


			if (!codeValue || !user) return getAuthCode(client_id)


			const base64 = window.btoa(`${client_id}:${clientSecret}`)

			const urlToken = `https://susitest.fiscalia.gov.co/sso/oauth/token?code=${codeValue}&grant_type=authorization_code&redirect_uri=http://localhost:3000/`
			//const urlToken =  `https://susitest.fiscalia.gov.co/sso/oauth/token?code=${codeValue}&grant_type=authorization_code&redirect_uri=http://satelite-qa-front.apps.dev.ocp.fiscalia.col/`

			const token: any = await fetch(
				urlToken,
				{
					method: "POST",
					headers: {
						"Content-type": "application/json",
						Authorization: `Basic ${base64}`,
					},
				}
			);


			const access_token = token?.data?.access_token

			if (!access_token || !token.status) {
				alert("TOKEN IS NOT VALID")
				handleLogout()
				return
			}

			function decodeJwt(token: String) {
				const [headerBase64, payloadBase64] = token.split(".");
				const decodedHeader = JSON.parse(atob(headerBase64));
				const decodedPayload = JSON.parse(atob(payloadBase64));
				return { header: decodedHeader, payload: decodedPayload };
			}

			const decodedToken = decodeJwt(access_token);

			setAuthorities(decodedToken.payload.authorities);
			const { authorities, ...userWithoutAuthorities } = decodedToken.payload;// le quitamos los authorities al user para exponerlo

			setToken(access_token)
			setUser(userWithoutAuthorities);

			setIsLoggedIn(true);
			setIsLoading(false);
			//handleLogout()
		}
		authorize()

	}, [user])

	useEffect(() => {

		function removeURLCode() {
			const baseURL = window.location.href.split('?')[0];
			window.history.replaceState({}, document.title, baseURL);
		}

		//  quita el parámetro 'code' de la URL
		removeURLCode();

		const checkLoginStatus = async () => {

			const storedToken = localStorage.getItem('access-token');
			const response: any = await fetch('https://susitest.fiscalia.gov.co/sso/isUserLogged',
				{
					headers: {
						Authorization: `Bearer ${storedToken}`
					},
				}
			);

			//console.log(response, response.data, response.status);
			if (response?.data === true) {
				// Si el usuario está conectado, reiniciar el intervalo
				//console.log("sigue autenticado");
				setIsLoggedIn(true);
				setIsLoading(false);
				//actualizamos el token para peticiones locales si es el caso
			} else {
				// console.log("la session ha terminado");
				handleLogout()
			}

		};
		// Función para verificar el estado de inicio de sesión
		checkLoginStatus();

		// Configurar el intervalo para que se ejecute cada 8 minutos //test( 0.25 * 60 * 1000)
		const intervalId = setInterval(checkLoginStatus, 0.10 * 60 * 1000);

		return () => {
			// Remover el listener cuando el componente se desmonta
			clearInterval(intervalId);
		}

	}, [])

	return (
		<RouterProvider router={router} />
	)
}

export default App;