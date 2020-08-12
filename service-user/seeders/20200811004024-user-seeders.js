'use strict';
const bcrypt = require('bcrypt');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('users', [
      {
       name: 'admin',
       profession: "Admin Micro",
       role: "admin",
       email: "admin@local.com",
       password: await bcrypt.hash('admin123',10),
       created_at: new Date(),
       updated_at: new Date()
      },
      {
        name: 'user1',
        profession: "Front end Developer",
        role: "student",
        email: "user1@local.com",
        password: await bcrypt.hash('user12345',10),
        created_at: new Date(),
        updated_at: new Date()
       }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
  }
};
