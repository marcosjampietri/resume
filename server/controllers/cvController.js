const mongoose = require('mongoose');
const education  = require('../models/eduModel');
const experience  = require('../models/expModel');
const skill = require('../models/skillMode');



//EDU
const addEdu = (req, res) => {
    const newEdu = new education(req.body);
    res.header('Access-Control-Allow-Origin', '*'); //CORS
    newEdu.save();
    res.redirect('/');
};

const getAllEdu = (req, res) => {
    education.find({}, (err, education) => {
        res.header('Access-Control-Allow-Origin', '*'); //CORS
        res.json(education);
    });
};

const getEdu = (req, res) => {
    education.findById(req.params.eduId, (err, education) => {
        res.json(education);
    });
};



//EXP
const addExps = (req, res) => {
    const newExp = new experience(req.body);
    res.header('Access-Control-Allow-Origin', '*'); //CORS
    newExp.save();
    res.redirect('/');
};

const getAllExps = (req, res) => {
    experience.find({}, (err, experience) => {
        res.header('Access-Control-Allow-Origin', '*'); //CORS
        res.json(experience);
    });
};

const getExp = (req, res) => {
    experience.findById(req.params.expId, (err, experience) => {
        res.json(experience);
    });
};


//SKILL
const addSkills = (req, res) => {
    const newSkill = new skill(req.body);
    res.header('Access-Control-Allow-Origin', '*'); //CORS
    newSkill.save();
    res.redirect('/');
};

const getAllSkills = (req, res) => {
    skill.find({}, (err, skill) => {
        res.header('Access-Control-Allow-Origin', '*'); //CORS
        res.json(skill);
    });
};

const getSkill = (req, res) => {
    skill.findById(req.params.sklId, (err, skill) => {
        res.json(skill);
    });
};


module.exports = { getAllEdu, addEdu, getEdu, getAllExps, addExps, getExp, getAllSkills, addSkills, getSkill };













