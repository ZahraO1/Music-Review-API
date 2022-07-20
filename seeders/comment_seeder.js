'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Comments', [{
      name: 'Jane Doe',
      rating: 7,
      comment: '10/10 would listen again',
      song_name: 'Baby Shark',
      date: "2022-07-20"
    }])
  },

  down: async (queryInterface, Sequelize) => {
    // note that this deletes ALL data from the bands table
    await queryInterface.bulkDelete('Comments', null, {})
  }
}