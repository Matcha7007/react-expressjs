const prisma = require("@prisma/client")

const generate_sics = require("./node_modules/@generated/sics").PrismaClient
const generate_wip = require("./node_modules/@generated/wip").PrismaClient


const sics = new generate_sics()
const wip = new generate_wip()

module.exports = { sics, wip }