const Sequelize = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './src/database/cliniquedb.sqlite'
  })

sequelize
    .authenticate()
    .then(() => {
        console.log('Conexão estabelecida com sucesso.');
    })
    .catch(err => {
        console.error('Não foi possível conectar ao banco de dados:', err);
    });

(async () => {
    await sequelize


        // deixa isso na primeira execução, mas é melhor o alter: true, pois se houver alguma
        // modificação nos models ele atualiza. Lembrar somente de não tirar nenhum item da tabela,
        // pois ele apagará a informação ( a coluna  no caso).
        // Depois que ele alterou, então VOLTAR para o sync(), pois se não ele vai compara 
        // toda tabela toda vez que carregar o banco de dados.

        // As shown above, sync({ force: true }) and sync({ alter: true }) can be destructive operations. 
        // Therefore, they are not recommended for production-level software. 
        // Instead, synchronization should be done with the advanced concept of Migrations, 
        // with the help of the Sequelize CLI.

        // .sync()

        // usar os comandos abaixo se adicionar alguma coisa nova no banco de dados
        // especialmente adicionar novas colunas



     .sync({ alter: true })


    // .then(() => {
    //     const MedicamentosData = require('./initialdata/MedicamentoData')
    //     const EstabelecimentisData = require('../models/cadastro/estabelecimentos')
    //     const ProfissionaisData = require('../models/cadastro/profissionais')
    //     //  const CID10 = require('./initialdata/CID10Data')
    // })
})();

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}