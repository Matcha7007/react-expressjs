const MasterSICSController = require('../../app/controllers/api/master-sics-controller')
const { auth } = require('../../app/middleware/auth')


module.exports = {
    group: {
        prefix: '/master-sics',
        //middleware: [auth]
    },
    routes: [
        {
            method: 'get',
            path: '/bomp-data-type',
            handler: MasterSICSController.GetAllBompDataType
        },
        {
            method: 'get',
            path: '/material-data-type',
            handler: MasterSICSController.GetAllMaterialDataType
        },
        {
            method: 'get',
            path: '/size-data-type',
            handler: MasterSICSController.GetAllSizeDataType
        },
        {
            method: 'get',
            path: '/supplier',
            handler: MasterSICSController.GetAllSupplier
        },
        {
            method: 'get',
            path: '/customer',
            handler: MasterSICSController.GetAllCustomer
        },
        {
            method: 'get',
            path: '/daily-product-plan',
            handler: MasterSICSController.GetAllDailyProductPlan
        },
        {
            method: 'get',
            path: '/product-data-type',
            handler: MasterSICSController.GetAllProduct
        },
        {
            method: 'get',
            path: '/size',
            handler: MasterSICSController.GetAllSize
        },

    ]
}