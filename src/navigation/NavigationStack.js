import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import LoginForm from '../screen/LoginForm';
import NavigationTab from './NavigationTab';
import Notificaciones from '../screen/Notificaciones';
import Home from '../screen/Home';
import CrearCuenta from '../screen/CrearCuenta';
import OlvidasteContrasena from '../screen/OlvidasteContrasena';
import Solicitud from '../screen/Solicitud';

export default function NavigationStack() {
	const Stack = createStackNavigator();
	return (
		<Stack.Navigator initialRouteName='Login'>
			<Stack.Screen
				name='Login'
				component={LoginForm}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name='Tab'
				component={NavigationTab}
				options={{ headerShown: false }} // Opcional: ocultar la barra de navegación en el TabNavigator
			/>
			<Stack.Screen
				name='Notificaciones'
				component={Notificaciones}
				options={{ headerShown: false }} // Opcional: ocultar la barra de navegación en el TabNavigator
			/>
			<Stack.Screen
				name='Home'
				component={Home}
				options={{ headerShown: false }} // Opcional: ocultar la barra de navegación en el TabNavigator
			/>
			<Stack.Screen
				name='CrearCuenta'
				component={CrearCuenta}
				//options={{ headerShown: false }} // Opcional: ocultar la barra de navegación en el TabNavigator
			/>
			<Stack.Screen
				name='Solicitud'
				component={Solicitud}
				//options={{ headerShown: false }} // Opcional: ocultar la barra de navegación en el TabNavigator
			/>
			<Stack.Screen
				name='OlvidasteContrasena'
				component={OlvidasteContrasena}
				//options={{ headerShown: false }} // Opcional: ocultar la barra de navegación en el TabNavigator
			/>
		</Stack.Navigator>
	);
}
