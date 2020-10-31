'use strict';

const Course = require('../models/course');
const Student = require('../models/student');

module.exports = {
  getCourses: async () => {
    try {
      return await Course.findAll();
    } catch (error) {
      return [];
    }
  },
  getCourse: async (root, { id }) => {
    try {
      return await Course.findByPk(id);
    } catch (error) {
      console.log('error:', error);
      return null;
    }
  },
  getStudents: async () => {
    try {
      return await Student.findAll();
    } catch (error) {
      return [];
    }
  },
  getStudent: async (root, { id }) => {
    try {
      return await Student.findByPk(id);
    } catch (error) {
      console.log('error:', error);
      return null;
    }
  },
};
