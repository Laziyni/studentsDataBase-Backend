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
        direction,
        course,
        group,
        educationForm,
        educationType,
        educationLevel,
        changeDate,
        details,
      } = req.body.data;
      const { status, from, to } = req.body.status;

      const worker = await User.findById(req.user.id);

      const data = await Student.create({
        addedBy: req.user.id,
        department: worker.department,
        fullname,
        gender,
        students,
        faculty,
        direction,
        course,
        group,
        educationForm,
        educationType,
        educationLevel,
        status,
        relocation: {
          from,
          to,
        },
        details,
        changeDate,
      });

      return res.json(data);
    } catch (error) {
      return res.json({ error: error.message });
    }
  },
  async getStudentByStatus(req, res) {
    try {
      const { title } = req.params;
      const data = await Student.find({}, null, { sort: { fullname: 1 } });
      if (title.toLowerCase() === "все") {
        return res.json(data);
      } else {
        const dataByStatus = data.filter(
          (item) =>
            String(item.status).toLowerCase() === String(title).toLowerCase()
        );
        return res.json(dataByStatus);
      }
    } catch (error) {
      res.json({ error: error.message });
    }
  },
  async changeStudentData(req, res) {
    try {
      const worker = await User.findById(req.params.workerId);
      const student = await Student.findById(req.params.id);
      if (String(worker._id) !== String(student.addedBy)) {
        return res.json({ error: "Ошибка доступа" });
      }

      const data = await Student.findByIdAndUpdate(
        req.params.id,
        {
          ...req.body,
        },
        { new: true }
      );
      return res.json(data);
    } catch (error) {
      res.json({ error: error.message });
    }
  },

  async getStudentById(req, res) {
    try {
      const data = await Student.findById(req.params.id);
      return res.json(data);
    } catch (error) {
      res.json({ error: error.message });
    }
  },
};
