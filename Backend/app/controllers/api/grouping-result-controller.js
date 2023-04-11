const { sics, wip } = require("../../../db.js");
const response_format = require("../../helpers/response.js");

class GroupingResultController {

    GetAll = async (req, res) => {
        try {
            const response = await wip.wip_grouping_result.findMany();
            return res.status(200).send(
                        response_format.response2( 200, true, "List Data Grouping Result", response)
                    );
        } catch (error) {
            res.status(500).json({msg: error.message});
        }
    }

    GetByUUID = async (req, res) => {
        const uuid = req.params.uuid;
        try {
            const countData = await wip.wip_grouping_result.count({
                where:{
                    uuid: uuid
                }
            })

            if(countData > 0){
                const response = await wip.wip_grouping_result.findMany({
                    where:{
                        uuid: uuid
                    }
                });
                return res.status(200).send(
                            response_format.response2( 200, true, "Data Grouping Result", response)
                        );
            } else {
                return res.status(404).send(
                            response_format.response2( 404, false, "Data Grouping Result Not Found", countData )
                        );
            }
        } catch (error) {
            res.status(500).json({msg: error.message});
        }
    }

    Create = async (req, res) => {
        const { wo_no, prod_cd, product_name, size_cd, size_nm, symbol, customer_cd, customer_name, project_name, standar_length, drw_qty, set, 
            machine_cd, request_due_date, date, capacity, status, user_id } = req.body;
        try {

            const create = await wip.wip_grouping_result.create({
                data:{
                    wo_no: wo_no,
                    prod_cd: prod_cd,
                    product_name: product_name,
                    size_cd: size_cd,
                    size_nm: size_nm,
                    symbol: symbol,
                    customer_cd: customer_cd,
                    customer_name: customer_name,
                    project_name: project_name,
                    standar_length: standar_length,
                    drw_qty: drw_qty,
                    set: set,
                    machine_cd: machine_cd,
                    request_due_date: request_due_date,
                    date: date,
                    capacity: capacity,
                    status: status,
                    created_by: user_id
                }
            });
            return res.status(200).send(
                        response_format.response2( 200, true, "Data Grouping Result Succesfully Created!", create)
                    );
        } catch (error) {
            res.status(500).json({msg: error.message});
        }
    }

    Delete = async (req, res) => {
        const uuid = req.params.uuid;
        try {
            const countData = await wip.wip_grouping_result.count({
                where:{
                    uuid: uuid
                }
            })

            if(countData > 0){
                const deleted = await wip.wip_grouping_result.deleteMany({
                    where: {
                        uuid: uuid
                    }
                });
  
                return res.status(200).send(
                            response_format.response2( 200, true, "Data Grouping Result Succesfully Deleted!", deleted)
                        );
            } else {
                return res.status(404).send(
                            response_format.response2( 404, false, "Data Grouping Result Not Found", countData )
                        );
            }
        } catch (error) {
            res.status(500).json({msg: error.message});
        }
    }

    Update = async (req, res) => {
        const { wo_no, prod_cd, product_name, size_cd, size_nm, symbol, customer_cd, customer_name, project_name, standar_length, drw_qty, set, 
            machine_cd, request_due_date, date, capacity, status, user_id } = req.body;
        const uuid = req.params.uuid;
        const modified_on = new Date();
        try {
            const countData = await wip.wip_mst_semi_wip_code.count({
                where:{
                    uuid: uuid
                }
            })

            if(countData > 0){
                const update = await wip.wip_mst_semi_wip_code.update({
                    where: {
                        uuid: uuid
                    },
                    data:{
                        wo_no: wo_no,
                        prod_cd: prod_cd,
                        product_name: product_name,
                        size_cd: size_cd,
                        size_nm: size_nm,
                        symbol: symbol,
                        customer_cd: customer_cd,
                        customer_name: customer_name,
                        project_name: project_name,
                        standar_length: standar_length,
                        drw_qty: drw_qty,
                        set: set,
                        machine_cd: machine_cd,
                        request_due_date: request_due_date,
                        date: date,
                        capacity: capacity,
                        status: status,
                        modified_by: user_id,
                        modified_on: modified_on
                    }
                });

                return res.status(200).send(
                        response_format.response2( 200, true, "Data Grouping Result Succesfully Updated!", update)
                    );
            } else {
                return res.status(404).send(
                            response_format.response2( 404, false, "Data Grouping Result Not Found", countData )
                        );
            }
        } catch (error) {
            res.status(500).json({msg: error.message});
        }
    }

}

module.exports = new GroupingResultController()