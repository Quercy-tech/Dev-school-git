const express = require('express');
const { PrismaClient } = require('@prisma/client');
const app = express();
const prisma = new PrismaClient();
const bodyParser = require('body-parser')

const PORT = 8000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
app.use(express.json());
app.use(bodyParser.json());

app.get('/customers/:id/orders', async (req, res) => {
    const { id } = req.params
    const integerValue = parseInt(id, 10);
    const orders = await prisma.orders.findMany({
        where: {customerId: integerValue}
    })
    if(!orders.length) {
        res.status(404).send('Customer with such id not found');
    }
    res.json(orders)
})


app.patch('/employees/:id', async (req, res) => {
    const { id } = req.params
    const integerValue = parseInt(id, 10)

    const updatedData = req.body;

    const existingRow = await prisma.employees.findUnique({
        where: { id: parseInt(id, 10) },
    });

    if (!existingRow) {
        return res.status(404).json({ message: 'Employee with such id not found' });
    }

    const employee = await prisma.employees.update({
        where: {id: integerValue},
        data: {firstName: updatedData.firstName,
            middleName:updatedData.middleName,
        lastName: updatedData.lastName,
        position: updatedData.position}
    })
    res.json(employee)
})

app.delete('/orders/:id', async (req, res) => {
    try {
        const { id } = req.params;

        // Use the delete method to delete the row with the specified ID
        const deletedRow = await prisma.orders.delete({
            where: { id: parseInt(id, 10) },
        });

        res.json({ message: 'Row deleted successfully', data: deletedRow });
    } catch (error) {
        console.error(error);
        res.status(404).json({ message: 'Order with such id not found' });
    }
});

app.post('/products', async (req, res) => {
    try {
        const newData = req.body;

        // Use the create method to insert a new row into the database
        const createdRow = await prisma.products.create({
            data: {
            name: newData.name,
            category: newData.category,
            amount: newData.amount,
            price: newData.price
            },
        });

        res.json({ message: 'Row created successfully', data: createdRow });
    } catch (error) {
        console.error(error);
        res.status(403).json({ message: 'Invalid product category' });
    }
});