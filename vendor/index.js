const { startVendor } = require("./handler.js");
const { chance } = require("../util");

const name = chance.word({ syllables: 3 });

startVendor(name);