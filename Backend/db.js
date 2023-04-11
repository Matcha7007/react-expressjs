const prisma = require("@prisma/client")

const generate_schema = require("./prisma/@generated").PrismaClient

const DB = new generate_schema()

module.exports = { DB }