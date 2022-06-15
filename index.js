const functions = require("@google-cloud/functions-framework");

functions.http("helloworld", (req, res) => {
    res.send(`Hello ${req.query.name || req.body.name || "World"}!`);
});

functions.http("random", (req, res) => {
    res.status(200).send({ random: getRandomNumber() });
});

function getRandomNumber() {
    return Math.random();
}
