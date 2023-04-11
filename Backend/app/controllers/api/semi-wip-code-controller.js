const { sics, wip } = require("../../../db.js");
const response_format = require("../../helpers/response");

class SemiWipCodeController {

    GetAll = async (req, res) => {
        try {
            const response = await wip.wip_mst_semi_wip_code.findMany();
            return res.status(200).send(
                        response_format.response2( 200, true, "List Data Semi WIP Code", response)
                    );
        } catch (error) {
            res.status(500).json({msg: error.message});
        }
    }

    Create = async (req, res) => {
        const { semi_wip_code, description, conductor, shape, kind, barrel, user_id } = req.body;
        try {
            const countData = await wip.wip_mst_semi_wip_code.count({
                where:{
                    semi_wip_code: semi_wip_code
                }
            })

            if(countData > 0){
                return res.status(409).send(
                            response_format.response2( 409, false, "Semi WIP Code Already Exist", countData)
                        );
            }
            const create = await wip.wip_mst_semi_wip_code.create({
                data:{
                    semi_wip_code: semi_wip_code,
                    description: description,
                    conductor: conductor,
                    shape: shape,
                    kind: kind,
                    barrel: barrel,
                    created_by: user_id
                }
            });
            return res.status(200).send(
                        response_format.response2( 200, true, "Data Semi WIP Code Succesfully Created!", create)
                    );
        } catch (error) {
            res.status(500).json({msg: error.message});
        }
    }

    Delete = async (req, res) => {
        const uuid = req.params.uuid;
        try {
            const countData = await wip.wip_mst_semi_wip_code.count({
                where:{
                    uuid: uuid
                }
            })

            if(countData > 0){
                const deleted = await wip.wip_mst_semi_wip_code.deleteMany({
                    where: {
                        uuid: uuid
                    }
                });
  
                return res.status(200).send(
                            response_format.response2( 200, true, "Data Semi WIP Code Succesfully Deleted!", deleted)
                        );
            } else {
                return res.status(404).send(
                            response_format.response2( 404, false, "Data Semi WIP Code Not Found", countData )
                        );
            }
        } catch (error) {
            res.status(500).json({msg: error.message});
        }
    }

    Update = async (req, res) => {
        const { semi_wip_code, description, conductor, shape, kind, barrel, user_id } = req.body;
        const uuid = req.params.uuid;
        const date = new Date();
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
                        semi_wip_code: semi_wip_code,
                        description: description,
                        conductor: conductor,
                        shape: shape,
                        kind: kind,
                        barrel: barrel,
                        modified_by: user_id,
                        modified_on: date
                    }
                });

                return res.status(200).send(
                        response_format.response2( 200, true, "Data Semi WIP Code Succesfully Updated!", update)
                    );
            } else {
                return res.status(404).send(
                            response_format.response2( 404, false, "Data Semi WIP Code Not Found", countData )
                        );
            }
        } catch (error) {
            res.status(500).json({msg: error.message});
        }
    }

}

module.exports = new SemiWipCodeController()