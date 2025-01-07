import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LoginSGO } from '../views/page-login-sgo/LoginSGO';
import { HomePrincipal } from '../views/page-home';
import { PageModulos } from '../views/page-modulos';
import { PageTutoriais } from '../views/page-lista-de-tutoriais';
import { PageVideosTutoriais } from '../views/page-lista-de-videos-tutoriais';
import { PageCadastro } from '../views/page-cadastro';
import { PagePops } from '../views/page-pops';
import { PagePopDetails } from '../views/page-pop-details';
import { PageCreatePop } from '../views/page-create-pop';

export const Rotas = () => {
  return (
    <Router>
      <Routes>
        {/* Rotas públicas */}
        <Route path="/login-sgo" element={<LoginSGO />} />
        <Route path="/" element={<HomePrincipal />} />
        <Route path="/modulo" element={<PageModulos />} />
        <Route path="/lista-de-treinamento" element={<PageTutoriais />} />
        <Route path="/treinamento" element={<PageVideosTutoriais />} />
        <Route path="/cadastro" element={<PageCadastro />} />

        {/* Rotas para POPs */}
        <Route path="/pops" element={<PagePops />} />
        <Route path="/pops/:id" element={<PagePopDetails />} />
        <Route path="/pops/create" element={<PageCreatePop />} />

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
