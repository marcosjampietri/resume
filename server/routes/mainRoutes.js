const { getAllEdu, addEdu, getEdu, getAllExps, addExps, getExp, getAllSkills, addSkills, getSkill } = require('../controllers/cvController.js');

const routes = (app) => {



    //CV-EDU
    app.route("/educations").get(getAllEdu).post(addEdu);
    app.route("/educations/:eduId").get(getEdu);

    //CV-EXP
    app.route("/experiences").get(getAllExps).post(addExps);
    app.route("/experiences/:expId").get(getExp);

    //CV-SKILL
    app.route("/skills").get(getAllSkills).post(addSkills);
    app.route("/skills/:sklId").get(getSkill);

};

module.exports = routes;