'use strict'

const router = require('express').Router();
const fastimage = require("fastimage");

router.get('/', (req, res, next) => {

    Promise.resolve(
        // https://media.giphy.com/media/xT9IgnIk1Du5nkyn0k/giphy.gif
        {url: "http://bkpartner.godohosting.com/ST/MDMM-TOP.jpg"}
    )
    .then(param => {
        fastimage.info(param.url)
        .then(info => {
            let maximum_height = 15000;
            if (maximum_height < info.height) {
                throw new Error({message: 'maximum height is ' + maximum_height + ', current size:' + info.height});
            } else {
                param['info'] = info;
                // resolve(param);
                res.status(201).json(param);
            }
            // param['info'] = info;
            // resolve();
            // res.status(201).json(param);
        })
        .catch(err => {
            // reject('error extract image info.\n' + err);
            console.log(err);
            res.status(500).send(err);
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).send(err);
    })
});

module.exports = router;