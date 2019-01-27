'use strict';

const Mongoose = require('mongoose');

const cls_detect_word = new Mongoose.Schema({
    prd_cls_cd: {type:String, required: true},
    wordNm: {type: String, required: true},
    manager: {type: String, required: true},
    uesYn: {type: String, default: "N"}
},{timestamps: true});

const ctgr = new Mongoose.Schema({
    prd_cls_cd: { type:String, required: true },
    prd_cls_nm: { type:String, required: true},
    cls_detect_obj: [cls_detect_word]
},{timestamps: true});

module.exports = Mongoose.model('detectword', ctgr);
