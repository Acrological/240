const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');
const router = require('express').Router();

const {signupUser,getAllUsers,getUser,updateUser, loginUser} = require('../controllers/user.controller');

router.get('/', async (req,res) => {
    const users = await getAllUsers();
    res.json(users);
});

router.get('/:id', async (req,res) => {
    const user = await getUser(req.params.id);
    res.json(user);
});

router.post('/', async (req,res) => {
    const newUser = await signupUser(req.body);
    res.json(newUser);
});

router.put('/',async(req,res) => {
    const updatedUser = await updateUser(req.body);
    res.json(updatedUser)
})

//Login verification and returning JWT Token with User data
router.post('/login',async(req,res) => {
    const user = await loginUser(req.body);
    let jwtSecretKey = process.env.JWT_SECRET_KEY;
    let data = {
        time: Date(),
        userId: 12,
    }

    const token = jwt.sign(data, jwtSecretKey);
    res.json(user,token);
})

// Verification of JWT
router.get("/user/validateToken", (req, res) => {
    // Tokens are generally passed in header of request
    // Due to security reasons.

    let tokenHeaderKey = process.env.TOKEN_HEADER_KEY;
    let jwtSecretKey = process.env.JWT_SECRET_KEY;

    try {
        const token = req.header(tokenHeaderKey);

        const verified = jwt.verify(token, jwtSecretKey);
        if (verified) {
            return res.send("Successfully Verified");
        } else {
            // Access Denied
            return res.status(401).send(error);
        }
    } catch (error) {
        // Access Denied
        return res.status(401).send(error);
    }
});

module.exports = router;