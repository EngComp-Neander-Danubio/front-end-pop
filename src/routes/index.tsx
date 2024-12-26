import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LoginSGO } from '../views/page-login-sgo/LoginSGO';
import { HomePrincipal } from '../views/page-home';

export const Rotas = () => {
  return (
    <Router>
      <Routes>
        {/* Rotas públicas */}

        <Route path="/login-sgo" element={<LoginSGO />} />
        <Route path="/" element={<HomePrincipal />} />

        {/* Rotas privadas */}
        {/* <Route
          path="/ficha"
          element={
            <PrivateRoute>
              <Ficha />
            </PrivateRoute>
          }
        />
        <Route
          path="/criar-operacao"
          element={
            <PrivateRoute>
              <PostoServico />
            </PrivateRoute>
          }
        />
        <Route
          path="/criar-operacao/*"
          element={
            <PrivateRoute>
              <EditarPostoServico />
            </PrivateRoute>
          }
        />
        <Route
          path="/listar-operacoes"
          element={
            <PrivateRoute>
              <ListEvent />
            </PrivateRoute>
          }
        />
        <Route
          path="/adicionar-operacao"
          element={
            <PrivateRoute>
              <PageAddGrandeEvento />
            </PrivateRoute>
          }
        />
        <Route
          path="/novoRegistro"
          element={
            <PrivateRoute>
              <Ficha />
            </PrivateRoute>
          }
        />
        <Route
          path="/listar-solicitacoes-postos"
          element={
            <PrivateRoute>
              <SolicitacaoPostos />
            </PrivateRoute>
          }
        />
        <Route
          path="/listar-solicitacoes-pms"
          element={
            <PrivateRoute>
              <SolicitacaoPMs />
            </PrivateRoute>
          }
        />
        <Route
          path="/solicitacao-posto-id/*"
          element={
            <PrivateRoute>
              <ViewSolicitacaoPostos />
            </PrivateRoute>
          }
        />
        <Route
          path="/solicitacao-pms-id/*"
          element={
            <PrivateRoute>
              <ViewSolicitacaoPMs />
            </PrivateRoute>
          }
        /> */}

        <Route path="/login-sgo" element={<LoginSGO />} />

      </Routes>
    </Router>
  );
};
