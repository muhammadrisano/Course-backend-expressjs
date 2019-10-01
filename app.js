require('dotenv').config();
const express = require('express')
const bodyParser = require('body-parser')
const app = express();
const port = process.env.SERVER_PORT;
const cors = require('cors')
const xssFilter = require('x-xss-protection');
const logger = require('morgan')
const userRoute = require('./src/routers/user')
const courseRoute = require('./src/routers/course')
const categoryRoute = require('./src/routers/category');
const enrollRoute = require('./src/routers/enroll')
// const leaderboardRoute = require('./src/routers/leaderboard')
// const patternRoute = require('./src/routers/pattern')
// const backgroundRouter = require('./src/routers/background')
// const buttonRoute = require('./src/routers/button')
app.use(cors());
app.use(xssFilter());
app.use(logger('dev'))
app.listen(port, () => {
    console.log(`\n App Listen port ${port}`)
})
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use('/user', userRoute)
app.use('/course', courseRoute)
app.use('/enroll', enrollRoute)
app.use('/category', categoryRoute)

