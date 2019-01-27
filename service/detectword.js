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

const findWord = (data) => {
    model.find()
}

module.exports = {
    findAll,
    findOne,
    insertWord
}