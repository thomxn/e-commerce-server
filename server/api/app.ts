import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import routes from './routes'
import audit from './utils/audit'

const app = express()
app.use(helmet())
app.use(cors())
app.use(express.json())
app.use(audit)
app.use('/api', routes)

export default app
