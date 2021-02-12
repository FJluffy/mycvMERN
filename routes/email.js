const router = require('express').Router();
let Email = require('../models/email')

router.route('/add').post((req, res) => {

    console.log(req.body);
    const name = req.body.name
    const email = req.body.email
    const message = req.body.message

    const emailDetail = new Email({
        name,
        email,
        message
    });
    emailDetail.save()
        .then(() => res.json('one contact added'))
        .catch(err => res.status(400).json('Error: ' + err))
})

module.exports = router;