const router = require('express').Router();
const { User, Post } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    try {
        const postData = await Post.findAll ({
            include: [

                {
                    model: Post,
                    attributes: ['username', 'content', 'image']
                }
            ]
        })
        const posts = postData.map((post) => post.get({ plain: true }));
        res.render('mainfeed', {
            posts,
            logged_in: req.session.logged_in
            

        })
    } catch(err) {
        res.status(500).json(err);
    }
});

router.get('/signup', async (req, res) => {
    try {
        res.render('signup');
    } catch(err) { 
        res.status(500).json(err);
    }
})

router.post('/signup', async (req, res) => {
    try {
        const userData = await User.create(req.body);
        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;
            res.status(200).json(userData);
        })
    } catch(err) {
        res.status(400).json(err);
    }
})

router.get('/login', (req, res) => {
    try {
        res.render('login');
    } catch(err) {
        res.status(500).json(err);
    }
})

router.post('/login', async (req, res) => {
    try {
        const userData = await User.findOne({ where: { username: req.body.username } });
        if (!userData) {
            res
                .status(400)
                .json({ message: 'Incorrect user name or password, please try again' });
            return;
        }
        const validPassword = await userData.checkPassword(req.body.password);
        if (!validPassword) {
            res
                .status(400)
                .json({ message: 'Incorrect user name or password, please try again' });
            return;
        }
        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;
            res.json({ user: userData, message: 'You are now logged in!' });
        });
    } catch(err) {
        res.status(400).json(err);
    }
})

router.get('/logout', (req, res) => {
    if (req.session.logged_in) {
        req.session.destroy(() => {
            res.status(204).end();
        })
    } else {
        res.status(404).end();
    }
})

module.exports = router;