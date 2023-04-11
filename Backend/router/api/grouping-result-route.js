const GroupingResultController = require('../../app/controllers/api/grouping-result-controller')
const { auth } = require('../../app/middleware/auth')


module.exports = {
    group: {
        prefix: '/grouping-result',
        //middleware: [auth]
    },
    routes: [
        {
            method: 'get',
            path: '/',
            handler: GroupingResultController.GetAll
        },
        {
            method: 'get',
            path: '/:uuid',
            handler: GroupingResultController.GetByUUID
        },
        {
            method: 'post',
            path: '/create',
            handler: GroupingResultController.Create
        },
        {
            method: 'delete',
            path: '/delete/:uuid',
            handler: GroupingResultController.Delete
        },
        {
            method: 'put',
            path: '/update/:uuid',
            handler: GroupingResultController.Update
        }
    ]
}