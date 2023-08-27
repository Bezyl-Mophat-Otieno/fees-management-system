import express, { json, urlencoded } from "express";
import studentRouter from "./routes/student.routes.js";
import { dbConnection } from "./database/db.js";
const port = process.env.PORT;
const app = express();

app.use(json());
app.use(urlencoded({ extended: true }));

app.use("/api/student", studentRouter);

app.listen(port, async (req, res) => {
  await dbConnection();
  console.log(`Server is running on port ${port}`);
});

export default app;
