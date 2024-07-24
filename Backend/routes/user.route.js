const router = require('express').Router();

const {createUser,getAllUsers,getUser,updateUser, loginUser} = require('../controllers/user.controller');

router.get('/', async (req,res) => {
    const users = await getAllUsers();
    res.json(users);
});

router.get('/:id', async (req,res) => {
    const user = await getUser(req.params.id);
    res.json(user);
});

router.post('/', async (req,res) => {
    const newUser = await createUser(req.body);
    res.json(newUser);
});

router.put('/',async(req,res) => {
    const updatedUser = await updateUser(req.body);
    res.json(updatedUser)
})
router.post('/login',async(req,res) => {
    const user = await loginUser(req.body);
    res.json(user);
})

module.exports = router;