'use strict';

const Course = require('../models/course');
const Student = require('../models/student');

module.exports = {
  createCourse: async (root, { input }) => {
    try {
      return await Course.create({ ...input });
    } catch (error) {
      console.log('error:', error);
      return null;
    }
  },
  editCourse: async (root, { id, input }) => {
    try {
      await Course.update({ ...input }, { where: { id } });
      return await Course.findByPk(id);
    } catch (error) {
      console.log('error:', error);
      return null;
    }
  },
  deleteCourse: async (root, { id }) => {
    try {
      const course = await Course.findByPk(id);
      const res = await Course.destroy({ where: { id } });
      if (res) {
        return course;
      }
      return null;
    } catch (error) {
      console.log('error:', error);
      return null;
    }
  },
  createStudent: async (root, { input }) => {
    try {
      return await Student.create({ ...input });
    } catch (error) {
      console.log('error:', error);
      return null;
    }
  },
  editStudent: async (root, { id, input }) => {
    try {
      await Student.update({ ...input }, { where: { id } });
      return await Student.findByPk(id);
    } catch (error) {
      console.log('error:', error);
      return null;
    }
  },
};
