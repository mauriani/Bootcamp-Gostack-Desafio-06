import Reactotron from 'reactotron-react-native';

// só executa se estiver em ambiente de desenvolvimento
if (__DEV__) {
  const tron = Reactotron.configure()
    .useReactNative()
    .connect({host: '192.168.1.148'});
  console.tron = tron;
  tron.clear();
}
