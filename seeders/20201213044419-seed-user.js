'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [{
      name: 'carlos',
      email: 'ejemplo@gmail.com',
      password: '$2y$12$dv9ALMUifxDhgoZnHf3HneEzv35gDtaDZQYH5GfTKuNo1BlX7ox1K',
      //password: "micontraseña",
      createdAt: new Date(),
      updatedAt: new Date()
    }])
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users, null', {})
  }
};
