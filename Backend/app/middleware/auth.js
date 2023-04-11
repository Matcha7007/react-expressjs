const UnauthenticatedException = require('../exceptions/unauthenticated-exception')
const jwt = require('jsonwebtoken')
const appConfig = require('../../config/app')
const { wip } = require("../../db.js");


exports.auth = async (req, res, next) => {
    const authHeader = req.headers.authorization
    const token = authHeader && authHeader.split(' ')[1]

    if (!token)
        return next(new UnauthenticatedException())

    await jwt.verify(token, appConfig.appKey, async (err, user) => {
        if (err)
            return next(new UnauthenticatedException('Invalid token!'))

        try {
           
            req.user = await wip.wip_mst_user.findUnique({
                where: {
                  username: user.username,
                },
              });
            next()
        } catch (e) {
            return res.status(e.status || 401).send({ message: 'User not found!' })
        }
    })
}