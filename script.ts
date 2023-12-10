import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    const customer = await prisma.customers.create({
        data: {
           firstName: "Anna",
            middleName: "meow",
            lastName: "Violet",
            email: "alexghezha@gmail.com",
            birthday: "2023-11-27T15:12:21Z"
        },
    } )
    console.log(customer)
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })