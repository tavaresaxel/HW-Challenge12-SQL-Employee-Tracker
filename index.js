const inquirer = require("inquirer")
const {printTable} = require("console-table-printer")
const mysql2 = require("mysql2")

const db = mysql2.createConnections()