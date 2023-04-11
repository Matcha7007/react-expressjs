const SectionController = require('../../app/controllers/api/section-controller')
const { auth } = require('../../app/middleware/auth')


module.exports = {
    group: {
        prefix: '/section',
        //middleware: [auth]
    },
    routes: [
        {
            method: 'get',
            path: '/',
            handler: SectionController.GetAll
        },
        {
            method: 'get',
            path: '/:uuid',
            handler: SectionController.GetById
        },
        {
            method: 'post',
            path: '/create/',
            handler: SectionController.Create
        },
        {
            method: 'put',
            path: '/update/:uuid',
            handler: SectionController.Update
        },
        {
            method: 'delete',
            path: '/delete/:uuid',
            handler: SectionController.Delete
        },
    ]
}