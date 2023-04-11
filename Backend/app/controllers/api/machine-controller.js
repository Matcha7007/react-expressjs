const { sics, wip } = require("../../../db.js");
const response_format = require("../../helpers/response");

class MachineController {
    GetAall = async (req, res) => {
        try {
            const response = await wip.wip_mst_machine.findMany();
            return res.status(200).send(
                response_format.response2( 200, true, "List Data Machine", response)
            );
        } catch (error) {
            res.status(500).json({msg: error.message});
        }
    }

    Update = async (req, res) => {
        const { machine_code, machine_name, process, material_type, min_range, max_range, wo_type, status, user_id } = req.body;
        const uuid = req.params.uuid;
        const date = new Date();
        try {
            const countData = await wip.wip_mst_machine.count({
                where:{
                    uuid: uuid
                }
            })

            if(countData > 0){
                const update = await wip.wip_mst_machine.updateMany({
                    where: {
                        uuid: uuid
                    },
                    data: {
                        machine_code: machine_code,
                        machine_name: machine_name,
                        process: process,
                        material_type: material_type,
                        min_range: min_range,
                        max_range: max_range,
                        wo_type: wo_type,
                        status: status,
                        modified_by: user_id,
                        modified_on: date
                    }
                });
                return res.status(200).send(
                    response_format.response2( 200, true, "Data Machine Succesfully Updated!", update)
                );
            } else {
                return res.status(404).send(
                            response_format.response2( 404, false, "Data Machine Not Found", countData )
                        );
            }
        } catch (error) {
            res.status(500).json({msg: error.message});
        }
    }

    Create = async (req, res) => {
        const { machine_code, machine_name, process, material_type, min_range, max_range, wo_type, status, machine_cd, user_id } = req.body;
        try {
            const countData = await wip.wip_mst_machine.count({
                where:{
                    machine_code: machine_code
                }
            })

            if(countData > 0){
                return res.status(409).send(
                            response_format.response2( 409, false, "Machine Code Already Exist", countData)
                        );
            }

            const create = await wip.wip_mst_machine.create({
                data: {
                    machine_code: machine_code,
                    machine_name: machine_name,
                    process: process,
                    material_type: material_type,
                    min_range: min_range,
                    max_range: max_range,
                    wo_type: wo_type,
                    status: status,
                    machine_cd: machine_cd,
                    created_by: user_id,
                }
            });
            return res.status(200).send(
                        response_format.response2( 200, true, "Data Machine Succesfully Created!", create)
                    );
        } catch (error) {
            res.status(500).json({msg: error.message});
        }
    }

}

module.exports = new MachineController();


