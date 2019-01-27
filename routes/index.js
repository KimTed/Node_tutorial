var express = require('express');
var router = express.Router();

const service = require('../service/detectword');
const model = require('../database/schema/detectword');

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

router.post('/insertWord', (req, res) => {
  const param = {};
  param.prd_cls_cd = req.body.prd_cls_cd;
  param.prd_cls_nm = req.body.prd_cls_nm;
  let tmpObj = {
    wordNm: req.body.wordNm,
    manager: req.body.manager
  }

  param.cls_detect_obj= tmpObj;

  console.dir("param ", param);
  service.insertWord(param)
  .then(result => {
    console.log("성공성공~~~~~~~~");
    console.dir(result);
    res.status(201).json(result);
  })
  .catch(err => {
    console.log("실패실패~~~~~~~~");
    console.log(err);
    res.status(500).send(err);
  })

});

router.get('/word', (req,res) => {
  service.findAll()
  .then(result => {
    console.dir(result);
    res.status(200).json(result);
  })
  .catch(err => {
    console.log(err);
    res.status(500).send(err);
  })
})

router.get('/one', (req, res)=>{
  service.findOne("5c4daa17511b5f236e60e677").then(result => {
    console.log(result);
    res.status(200).json(result);
  })
  .catch(err=>{
    console.log(err);
    res.status(500).send(err);
  })
})

module.exports = router;
