import App from './App.tsx';
import * as React from 'react';
import { CSSReset, ChakraProvider } from '@chakra-ui/react';
import * as ReactDOM from 'react-dom/client';
import { AuthProvider } from './context/AuthProvider/index.tsx';
import { theme } from './theme.tsx';
import { IsOpenProvider } from './context/isOpenContext/UseIsOpenContext.tsx';

if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('../sw.ts')
    .then(registration => {
      console.log('Service Worker registrado com sucesso:', registration);
    })
    .catch(error => {
      console.error('Falha ao registrar o Service Worker:', error);
    });
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <AuthProvider>
        <IsOpenProvider>
        <CSSReset />
        <App />
        </IsOpenProvider>
      </AuthProvider>
    </ChakraProvider>
  </React.StrictMode>,
);
