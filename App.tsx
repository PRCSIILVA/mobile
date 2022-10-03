import { Loading } from './Components/Loading';
import { Routes } from './src/Routes';
import { Background } from './Components/Background';
import { StatusBar } from 'react-native';
import {useFonts,
        Inter_400Regular,
        Inter_600SemiBold,
        Inter_700Bold,
        Inter_900Black
      } from '@expo-google-fonts/inter';



export default function App() {
  const [fontsLoaded]=useFonts({
        Inter_400Regular,
        Inter_600SemiBold,
        Inter_700Bold,
        Inter_900Black
  });
  return (
    <Background>
      <StatusBar
      barStyle="light-content"
      backgroundColor="transparent"
      translucent
      />
      {fontsLoaded ? <Routes/> : <Loading/>}
    </Background>
  );

}