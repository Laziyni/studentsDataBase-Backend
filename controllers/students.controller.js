const Student = require("../models/Student.model");
const User = require("../models/User.model");

module.exports.studentsController = {
  async postStudent(req, res) {
    try {
      const {
        fullname,
        gender,
        students,
        faculty,
        course,
        group,
        educationForm,
        educationType,
        changeDate,
      } = req.body.data;
      const worker = User.findById(req.user.id);
      const addedBy = req.user.id;
      const data = await Student.create({
        addedBy: worker._id,
        department: worker.department,
        fullname,
        gender,
        students,
        faculty,
        course,
        group,
        educationForm,
        educationType,
        status: { ...req.body.status },
        changeDate,
        addedBy,
      });
      return res.json(data);
    } catch (error) {
      return res.json({ error: error.message });
    }
  },
  async getAllStudents(req, res) {
    try {
      const data = await Student.find({}, null, { sort: { fullname: 1 } });
      return res.json(data);
    } catch (error) {
      res.json({ error: error.message });
    }
  },
  async getStudentByStatus(req, res) {
    try {
      const { title } = req.params;
      const data = await Student.find({}, null, { sort: { fullname: 1 } });
      if (title === "все") {
        return res.json(data);
      } else {
        const dataByStatus = data.filter(
          (item) =>
            String(item.status.title).toLowerCase() ===
            String(title).toLowerCase()
        );
        return res.json(dataByStatus);
      }
    } catch (error) {
      res.json({ error: error.message });
    }
  },
};
