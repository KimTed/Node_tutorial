'use strict'

const router = require('express').Router();
const service = require('../../service/detectword');

router.post('/insertWord', (req, res) => {
    const param = {};
    param.prd_cls_cd = req.body.prd_cls_cd;
    param.prd_cls_nm = req.body.prd_cls_nm;
    let tmpObj = {
      prd_cls_cd: req.body.prd_cls_cd,
      wordNm: req.body.wordNm,
      manager: req.body.manager
    }
  
    let detectObjArr = [];
    detectObjArr.push(tmpObj);
    detectObjArr.push(tmpObj);
    param.cls_detect_obj= detectObjArr;
  
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
});
  
router.get('/one', (req, res)=>{
    service.findOne("5c4daa17511b5f236e60e677")
    .then(result => {
      console.log(result);
      res.status(200).json(result);
    })
    .catch(err=>{
      console.log(err);
      res.status(500).send(err);
    })
});
  
router.get('/clscd', (req,res) => {
  
    service.findDetectObj({clsCd: "11111",wordNm: "몰라"})
    .then(result => {
      console.log(result);
      res.status(200).json(result);
    })
    .catch(err=>{
      console.log(err);
      res.status(500).send(err);
    })
});
  
module.exports = router;  