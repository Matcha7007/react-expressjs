const { sics, wip } = require("../../../db.js");
const response_format = require("../../helpers/response");

class ProcessCodeController {

    GetALl = async (req, res) => {
        try {
            const response = await wip.wip_mst_process_code.findMany();
            return res.status(200).send(
                response_format.response2( 200, true, "List Data Process Code", response)
            );
        } catch (error) {
            res.status(500).json({msg: error.message});
        }
    }

    Create = async (req, res) => {
        const { jkprocess_cd, jkprocess_nm, process_code, process_name, user_id } = req.body;
        try {
            const create = await wip.wip_mst_process_code.create({
                data:{
                    jkprocess_cd: jkprocess_cd,
                    jkprocess_nm: jkprocess_nm,
                    process_code: process_code,
                    process_name: process_name,
                    created_by: user_id
                }
            });
            return res.status(200).send(
                response_format.response2( 200, true, "Data Process Code Succesfully Created!", create)
            );
        } catch (error) {
            res.status(500).json({msg: error.message});
        }
    }

    Delete = async (req, res) => {
        const uuid = req.params.uuid;
        try {
            const countData = await wip.wip_mst_process_code.count({
                where:{
                    uuid: uuid
                }
            })

            if(countData > 0){
                const deleted = await wip.wip_mst_process_code.deleteMany({
                    where: {
                        uuid: uuid
                    }
                });

                return res.status(200).send(
                            response_format.response2( 200, true, "Data Process Code Succesfully Deleted!", deleted)
                        );
            } else {
                return res.status(404).send(
                            response_format.response2( 404, false, "Data Process Code Not Found", countData )
                        );
            }
        } catch (error) {
            res.status(500).json({msg: error.message});
        }
    }

    Update = async (req, res) => {
        const { process_code, process_name, user_id } = req.body;
        const uuid = req.params.uuid;
        const date = new Date();
        try {
            const countData = await wip.wip_mst_process_code.count({
                where:{
                    uuid: uuid
                }
            })

            if(countData > 0){
                const update = await wip.wip_mst_process_code.updateMany({
                    where: {
                        uuid: uuid
                    },
                    data:{
                        process_code: process_code,
                        process_name: process_name,
                        modified_by: user_id,
                        modified_on: date
                    }
                });
                
                return res.status(200).send(
                            response_format.response2( 200, true, "Data Process Code Succesfully Updated!", update)
                        );
            } else {
                return res.status(404).send(
                            response_format.response2( 404, false, "Data Process Code Not Found", countData )
                        );
            }
        } catch (error) {
            res.status(500).json({msg: error.message});
        }
    }

}

module.exports = new ProcessCodeController()