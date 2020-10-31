'use strict';
const Sequelize = require('sequelize/index');
const sequelize = require('../db/index');

const Course = sequelize.define(
  'course',
  {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      unique: true,
    },
    title: {
      type: Sequelize.STRING,
      allowNull: false,
    },

    teacher: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    description: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    topic: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = Course;
