const Knex = require('knex');
const knexConfig = require('../../knexfile'); 
const db = Knex(knexConfig.development); 
console.log(db,"priya")

module.exports = db; 
