import Reactotron from 'reactotron-react-native';

// só executa se estiver em ambiente de desenvolvimento
if (__DEV__) {
  const tron = Reactotron.configure({host: '192.168.1.148'})
    .useReactNative()
    .connect();
  console.tron = tron;
  tron.clear();
}
