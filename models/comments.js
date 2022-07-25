'use strict'
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    /* static associate({ MeetGreet, SetTime }) {
      // meet and greets
      Comment.hasMany(MeetGreet, {
        foreignKey: "Comment_id",
        as: "meet_greets"
      })

      // set times 
      Comment.hasMany(SetTime, {
        foreignKey: "Comment_id",
        as: "set_times"
      })
    } */
  }
  Comment.init({
    name:{
      type: DataTypes.STRING,
    },
    rating: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    comment: {
        type: DataTypes.STRING,
    },
    song_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    date: {
      allowNull: false,
      type: DataTypes.DATE
    }
  }, {
    sequelize,
    modelName: 'Comment',
    tableName: 'Comments',
    timestamps: false
  })
  return Comment
}