// src/models/user.model.js

const UserModel = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    fullName: DataTypes.STRING,
    email: DataTypes.STRING,
    phoneNum: DataTypes.STRING,
  });
  (async () => {
    await sequelize.sync({ force: true });
    // As funções vão aqui
    const sara = User.build({
      fullName: 'Sara Silva Santos',
      email: 'sara.ss@trybe.com',
    });
    
    console.log(sara instanceof User); // true
    console.log(sara.fullName); // "Sara Silva Santos"

    await sara.save();
    console.log('Pessoa salva no banco de dados!');

    // se quisermos criar uma instância de um módulo podemos usar o create (junta o método build com o save) também;
    const sara2 = await User.create({
      fullName: 'Sara Silva Santos 2',
      email: 'sara.ss2@trybe.com',
    });
    
    console.log(sara2 instanceof User); // true
    console.log(sara2.name); // "Sara Silva Santos"
})();
  return User;
};

module.exports = UserModel;