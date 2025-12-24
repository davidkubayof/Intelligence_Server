import express from 'express'
import usersRoutes from './routes/usersR.js'
import agentsRoutes from './routes/agentsR.js'
import reportsRoutes from './routes/reportsR.js'

const app = express();
const port = 3002;

app.use(express.json())

//users
app.use('/users', usersRoutes)

//agent
app.use('/agents', agentsRoutes)

//report
app.use('/reports', reportsRoutes)

app.use((err, req, res, next) => {
    res.status(500).json({ err: err ? err : "internal error" });
})

app.listen(port, () => {
    console.log(`server run on ${port}`);
})

// console.log(new Date().toISOString());
