import express, { Errback, Express, NextFunction, Request, Response } from 'express'
import cors from 'cors'

import { router } from '../routes'

const app: Express = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(router)

app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(404).json({ message: 'Page Not Found' })
})

app.use((err: Errback, req: Request, res: Response, next: NextFunction) => {
  return res.status(500).json({ message: 'Internal Error' })
})

export { app }
