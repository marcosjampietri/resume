const {
    getAllEdu,
    addEdu,
    getEdu,
    getAllExps,
    addExps,
    getExp,
    getAllSkills,
    addSkills,
    getSkill,
} = require("../controllers/cvController.js");

const routes = (app) => {
    //CV-EDU
    app.route("/api/educations").get(getAllEdu).post(addEdu);
    app.route("/api/educations/:eduId").get(getEdu);

    //CV-EXP
    app.route("/api/experiences").get(getAllExps).post(addExps);
    app.route("/api/experiences/:expId").get(getExp);

    //CV-SKILL
    app.route("/api/skills").get(getAllSkills).post(addSkills);
    app.route("/api/skills/:sklId").get(getSkill);
};

module.exports = routes;
