const { sics, wip } = require("../../../db.js");
const response_format = require("../../helpers/response");

class DrumController {

    GetAll = async (req, res) => {
        try {
            const response = await wip.wip_mst_drum.findMany();
            return res.status(200).send(
                        response_format.response2( 200, true, "List Data Drum", response)
                    );
        } catch (error) {
            res.status(500).json({msg: error.message});
        }
    }

    Create = async (req, res) => {
        const { drum_code, drum_class, drum_class_name, type, flange, barrel, inner_width, clearence, outer_width,
                net_weight, max_load, length, wide, height, user_id } = req.body;

        try {
            const countData = await wip.wip_mst_drum.count({
                where:{
                    drum_code: drum_code
                }
            })

            if(countData > 0){
                return res.status(409).send(
                            response_format.response2( 409, false, "Drum Code Already Exist", countData)
                        );
            }

            const create = await wip.wip_mst_drum.create({
                data:{
                    drum_code: drum_code,
                    drum_class: drum_class,
                    drum_class_name: drum_class_name,
                    type: type,
                    flange: flange,
                    barrel: barrel,
                    inner_width: inner_width,
                    clearence: clearence,
                    outer_width: outer_width,
                    net_weight: net_weight,
                    max_load: max_load,
                    length: length,
                    wide: wide,
                    height: height,
                    created_by: user_id
                }
            });
            return res.status(200).send(
                        response_format.response2( 200, true, "Data Drum Succesfully Created!", create)
                    );
        } catch (error) {
            res.status(500).json({msg: error.message});
        }
    }

    Delete = async (req, res) => {
        const uuid = req.params.uuid;
        try {
            const countData = await wip.wip_mst_drum.count({
                where:{
                    uuid: uuid
                }
            })

            if(countData > 0){
                const deleted = await wip.wip_mst_drum.deleteMany({
                    where: {
                        uuid: uuid
                    }
                });

                return res.status(200).send(
                            response_format.response2( 200, true, "Data Drum Succesfully Deleted!", deleted)
                        );
            } else {
                return res.status(404).send(
                            response_format.response2( 404, false, "Data Drum Not Found", countData )
                        );
            }
        } catch (error) {
            res.status(500).json({msg: error.message});
        }
    }

    Update = async (req, res) => {
        const { drum_code, drum_class, drum_class_name, type, flange, barrel, inner_width, clearence, outer_width,
                net_weight, max_load, length, wide, height, user_id } = req.body;
        const uuid = req.params.uuid;
        const date = new Date();

        try {
            const countData = await wip.wip_mst_drum.count({
                where:{
                    uuid: uuid
                }
            })

            if(countData > 0){
                const update = await wip.wip_mst_drum.update({
                    where: {
                        uuid: uuid
                    },
                    data:{
                        drum_code: drum_code,
                        drum_class: drum_class,
                        drum_class_name: drum_class_name,
                        type: type,
                        flange: flange,
                        barrel: barrel,
                        inner_width: inner_width,
                        clearence: clearence,
                        outer_width: outer_width,
                        net_weight: net_weight,
                        max_load: max_load,
                        length: length,
                        wide: wide,
                        height: height,
                        modified_by: user_id,
                        modified_on: date
                    }
                });
                
                return res.status(200).send(
                            response_format.response2( 200, true, "Data Drum Succesfully Updated!", update)
                        );
            } else {
                return res.status(404).send(
                            response_format.response2( 404, false, "Data Drum Not Found", countData )
                        );
            }
        } catch (error) {
            res.status(500).json({msg: error.message});
        }
    }

}

module.exports = new DrumController()