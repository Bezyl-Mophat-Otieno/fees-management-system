import { Router } from "express"
const studentRouter = Router();
import { addStudent,fetchStudents,fetchOneStudent , updateStudentFees , deleteStudent} from "../controllers/student.controller.js";



studentRouter.post("/add", addStudent )
studentRouter.get("/", fetchStudents )
studentRouter.get("/:id", fetchOneStudent )
studentRouter.put("/:id", deleteStudent )
studentRouter.put("/update/:id", updateStudentFees )




export default studentRouter;