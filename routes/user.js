import express from 'express';
import { v4 as uuid } from 'uuid';

const router = express.Router();

let users = [];

router.get('/', (req, res) => {
    console.log(`Users in the database: ${users}`);

    res.send(users);
});

router.post('/', (req, res) => {
    const user = req.body;

    users.push({ ...user, id: uuid() });

    res.send(`User ${user.firstName} added to the database.`);
});

router.get('/:id', (req, res) => {
    const {id} = req.params;
    const found = users.find(user => user.id===id);
    res.send(found)
});

router.delete('/:id',(req, res) =>{
    users = users.filter((user) => user.id !== req.params.id);
    res.send(`user with id ${req.params.id} has been deleted`)

});

router.patch('/:id',(req, res) =>{
    const {id} = req.params;
    const {firstName,lastName,age} = req.body;
    const user = users.find(user => user.id===id);

    if (firstName) user.firstName = firstName;
    
    if (lastName) user.lastName = lastName;
    
    if (age) user.age = age;
    
    res.send(`user with id ${id} has been updated`)


});





export default router