const { sics, wip } = require("../../../db.js");
const response_format = require("../../helpers/response.js");

class WorkingOrderController {

    GetAll = async (req, res) => {
        try {
            const response = await sics.v_so_wo.findMany({
                select: {
                    wo_no: true,
                    wo_date: true,
                    requested_due_date: true,
                    type: true,
                    customer_cd: true,
                    customer_name: true,
                }
            });
            return res.status(200)
                    .send(
                        response_format.response2(
                        200,
                        true,
                        "list data working order",
                        response)
                    );
        } catch (error) {
            res.status(500).json({msg: error.message});
        }
    }

    GetById = async (req, res) => {
        const wono = req.params.wono;
        try {
            const response = await sics.v_so_wo.findMany({
                where: {
                    wo_no: wono
                },
                select: {
                    wo_line_no: true,
                    project: true,
                    item_c: true,
                    item_nm: true,
                    set: true,
                    total_length: true,
                    requested_due_date: true,
                }
            });
            return res.status(200)
                    .send(
                        response_format.response2(
                        200,
                        true,
                        "data detail working order",
                        response)
                    );
        } catch (error) {
            res.status(500).json({msg: error.message});
        }
    }
}

module.exports = new WorkingOrderController()