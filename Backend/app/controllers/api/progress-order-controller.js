const { sics, wip } = require("../../../db.js");
const response_format = require("../../helpers/response.js");

class ProgressOrderController {

    GetAll = async (req, res) => {
        try {
            const response = await wip.wip_proggres_order.findMany();
            return res.status(200).send(
                        response_format.response2( 200, true, "List Data Progress Order", response)
                    );
        } catch (error) {
            res.status(500).json({msg: error.message});
        }
    }

    GetByUUID = async (req, res) => {
        const uuid = req.params.uuid;
        try {
            const countData = await wip.wip_proggres_order.count({
                where:{
                    uuid: uuid
                }
            })

            if(countData > 0){
                const response = await wip.wip_proggres_order.findMany({
                    where:{
                        uuid: uuid
                    }
                });
                return res.status(200).send(
                            response_format.response2( 200, true, "Data Progress Order", response)
                        );
            } else {
                return res.status(404).send(
                            response_format.response2( 404, false, "Data Progress Order Not Found", countData )
                        );
            }
        } catch (error) {
            res.status(500).json({msg: error.message});
        }
    }

    Create = async (req, res) => {
        const { grouping_result_id, nsk, name, qty, set, available_qty, completed_qty, product_code, process, machine_code, lead_time, 
            status, start_process, end_process, created_date, user_id } = req.body;
        try {

            const create = await wip.wip_proggres_order.create({
                data:{
                    grouping_result_id: grouping_result_id,
                    nsk: nsk,
                    name: name,
                    qty: qty,
                    set: set,
                    available_qty: available_qty,
                    completed_qty: completed_qty,
                    product_code: product_code,
                    process: process,
                    machine_code: machine_code,
                    lead_time: lead_time,
                    status: status,
                    start_process: start_process,
                    end_process: end_process,
                    created_date: created_date,
                    created_by: user_id
                }
            });
            return res.status(200).send(
                        response_format.response2( 200, true, "Data Progress Order Succesfully Created!", create)
                    );
        } catch (error) {
            res.status(500).json({msg: error.message});
        }
    }

    Delete = async (req, res) => {
        const uuid = req.params.uuid;
        try {
            const countData = await wip.wip_proggres_order.count({
                where:{
                    uuid: uuid
                }
            })

            if(countData > 0){
                const deleted = await wip.wip_proggres_order.deleteMany({
                    where: {
                        uuid: uuid
                    }
                });
  
                return res.status(200).send(
                            response_format.response2( 200, true, "Data Progress Order Succesfully Deleted!", deleted)
                        );
            } else {
                return res.status(404).send(
                            response_format.response2( 404, false, "Data Progress Order Not Found", countData )
                        );
            }
        } catch (error) {
            res.status(500).json({msg: error.message});
        }
    }

    Update = async (req, res) => {
        const { grouping_result_id, nsk, name, qty, set, available_qty, completed_qty, product_code, process, machine_code, lead_time, 
            status, start_process, end_process, user_id } = req.body;
        const uuid = req.params.uuid;
        const modified_on = new Date();
        try {
            const countData = await wip.wip_proggres_order.count({
                where:{
                    uuid: uuid
                }
            })

            if(countData > 0){
                const update = await wip.wip_proggres_order.update({
                    where: {
                        uuid: uuid
                    },
                    data:{
                        grouping_result_id: grouping_result_id,
                        nsk: nsk,
                        name: name,
                        qty: qty,
                        set: set,
                        available_qty: available_qty,
                        completed_qty: completed_qty,
                        product_code: product_code,
                        process: process,
                        machine_code: machine_code,
                        lead_time: lead_time,
                        status: status,
                        start_process: start_process,
                        end_process: end_process,
                        modified_by: user_id,
                        modified_on: modified_on
                    }
                });

                return res.status(200).send(
                        response_format.response2( 200, true, "Data Progress Order Succesfully Updated!", update)
                    );
            } else {
                return res.status(404).send(
                            response_format.response2( 404, false, "Data Progress Order Not Found", countData )
                        );
            }
        } catch (error) {
            res.status(500).json({msg: error.message});
        }
    }

}

module.exports = new ProgressOrderController()