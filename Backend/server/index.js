const express = require('express')
const cors = require("cors")
const Router = require('../router')
const bodyParser = require("body-parser");

class Server {
    constructor(port) {
        this.port = port
        this.app = express()
        this.router = Router
        this.app.use(cors())
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: true }));
    }

    start() {
        this._setupRoutes()
        this._listen()
    }

    _setupRoutes() {
        this.router.create(this.app)
    }

    _listen() {
        this.app.listen(this.port, () => {
            console.log(`App is running on port ${this.port}`);
        })
    }
}

module.exports = Server