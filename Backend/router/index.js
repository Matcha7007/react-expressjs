const express = require('express')
const apiRoutes = require('./api')

class Router {

    constructor() {
        this.router = express.Router()
        this.apiRoutes = apiRoutes
    }

    create(app) {
        // TODO attach middleware
        this._attachMiddleware()

        // TODO attach routes
        //this._attachWebRoutes()
        this._attachApiRoutes()

        // TODO handle 404 pages
        this._handlePageNotFound()

        // TODO handle exceptions
        this._handleExceptions()

        // TODO register router

        app.use(this.router)
    }

    _handleExceptions() {
        this.router.use((err, req, res, next) => {
            err.statusCode = err.status || err.statusCode || 500

            return res.status(err.statusCode).send(err.message)
        })
    }

    _catchError(route) {
        return (req, res, next) => {
            route(req, res, next).catch(next)
        }
    }

    _attachMiddleware() {
        this.router.use(express.json())
    }

    _handlePageNotFound() {
        this.router.all('*', (req, res) => {
            res.status(404).send('Page not found!')
        })
    }

    _attachApiRoutes() {
        this._attachRoutes(this.apiRoutes, '/api')
    }

    _attachRoutes(routeGroups, prefix = '') {
        routeGroups.forEach(({ group, routes }) => {
            routes.forEach(({ method, path, middleware = [], handler }) => {
                this.router[method](
                    prefix + group.prefix + path,
                    [...group.middleware || [], ...middleware],
                    this._catchError(handler))
            })
        })
    }
}

module.exports = new Router()