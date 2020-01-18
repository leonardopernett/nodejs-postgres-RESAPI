const {Router} = require('express');
const router = Router();

const {getUser, createUser, getOneuser, deleteUser, updateUser} = require('../controller/indexController.js')

router.get('/users', getUser);
router.get('/users/:id', getOneuser);
router.post('/users', createUser);
router.delete('/users/:id',deleteUser)
router.put('/users/:id', updateUser);


module.exports= router;
