import { Router } from 'express'
import { PrismaClient } from '@prisma/client'

const router = Router()

const prisma = new PrismaClient()

router.get('/', (req, res) => {
  res.json({ message: 'Hello world!' })
})

router.get('/prisma', (req, res) => {
  async function main() {
    // await prisma.user.create({
    //   data: {
    //     id: 1,
    //     name: 'Alice',
    //     email: 'email@email.com',
    //     password: 'password',
    //     accessLevel: 'ADMIN',
    //   },
    // })

    const allUsers = await prisma.user.findMany()

    console.log({ allUsers })
  }

  main()
    .then(async () => {
      await prisma.$disconnect()
    })
    .catch(async (e) => {
      console.error(e)
      // await prisma.$disconnect()
      // process.exit(1)
    })

  res.json({ message: 'Hello world!' })
})

export { router }
