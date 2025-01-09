import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { HomePrincipal } from '../views/page-home';
import { PageModulos } from '../views/page-modulos';
import { PageTutoriais } from '../views/page-lista-de-tutoriais';
import { PageVideosTutoriais } from '../views/page-lista-de-videos-tutoriais';
import { PageCadastro } from '../views/page-cadastro';
import { LoginPop } from '../views/page-login-sgo/LoginPop';

export const Rotas = () => {
  return (
    <Router>
      <Routes>
        {/* Rotas públicas */}

        <Route path="/login-pop" element={<LoginPop />} />
        <Route path="/" element={<HomePrincipal />} />
        <Route path="/modulo" element={<PageModulos />} />
        <Route path="/lista-de-treinamento" element={<PageTutoriais />} />
        <Route path="/treinamento" element={<PageVideosTutoriais />} />
        <Route path="/cadastro" element={<PageCadastro />} />
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


      </Routes>
    </Router>
  );
};
