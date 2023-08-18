import express, { json, urlencoded } from 'express';
import studentRouter from './routes/student.routes.js';
const port = 5000
const app = express();   


app.use(json())
app.use(urlencoded({extended: true}))






app.use('/api/student', studentRouter )

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})

export default app;