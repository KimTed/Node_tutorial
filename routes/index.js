var express = require('express');
var router = express.Router();

const delayTest = (sec) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(new Date().toISOString())
    }, sec * 1000)
  })
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', (req, res, next) => {
  res.send("called POST API!!")
})

router.get('/promise', (req, res, next) => {
  delayTest(1).then((result) => {
    res.send(result)
    console.log(result)
    return delayTest(1)
  }).then((result) => {
    res.send(result)
    console.log(result)
    return delayTest(1)
  }).then((result) => {
    res.send(result)
    console.log(result)
    return delayTest(1)
  }).then((result) => {
    res.send("result")
    console.log(result)
    return delayTest(1)
  })
})
module.exports = router;
