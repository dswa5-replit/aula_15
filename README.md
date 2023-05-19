# aula_15
Autenticação com Passport (Contatos) (apenas arquivos alterados)

- app/models/Usuario.js: Criação da coleção Usuário no banco de dados.
- app/routes/auth.js: definir as rotas envolvidas no processo de autenticação.
- app/routes/contato.js: função com a responsabilidade de verificar se o usuário está autenticado.
- app/routes/index.js: criar rota para a página inicial.
- app/views/index.ejs: mostrar usuário logado.
- config/express.js: ativação dos middlewares de cookie, sessão e de inicialização do Passport.
- config/passport.js: definir estratégia de autenticação.
- public/index.html: página removida.
- public/js/main.js: incluir rota de autenticação.
- public/js/services/InterceptorService.js: direcionar usuário não autenticado.
- public/partials/auth.html: Tela para direcionar a autenticação.
- server.js: Carregar módulo de autenticação do Passport.
