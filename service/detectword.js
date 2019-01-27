'use strict';

const model = require('../database').models.detectword;

const findAll = (data, cb) => {
    return model.find(data, cb).sort({_id:1});
}

const findOne = (id, cb) => {
    return model.findOne({_id: id});
}

const insertWord = (data, cb) => {
   let newModel = new model(data);
   return newModel.save(cb);
}

const findDetectObj = (data) => {
    return model.find()
    // .where('prd_cls_cd').equals(data.clsCd)
    // .find("cls_detect_obj.wordNm").equals(data.wordNm);
    .populate({
        path: 'cls_detect_obj',
        match: { wordNm: data.wordNm},
        select: 'wordNm'
    })
}

module.exports = {
    findAll,
    findOne,
    insertWord,
    findDetectObj
}