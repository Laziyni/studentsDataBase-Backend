const { Router } = require("express");

const { studentsController } = require("../controllers/students.controller");
const authMiddleware = require("./middlewares/auth.middleware");

const router = Router();

router.post("/", authMiddleware, studentsController.postStudent);
router.get("/status/:title", studentsController.getStudentByStatus);
router.patch("/student/:workerId/:id", studentsController.changeStudentData);
router.get("/student/:id", studentsController.getStudentById);

module.exports = router;
