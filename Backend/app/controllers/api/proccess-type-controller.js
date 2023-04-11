const { sics, wip } = require("../../../db.js");
const response_format = require("../../helpers/response");

class ProcessTypeController {

    GetAll = async (req, res) => {
        try {
            const response = await sics.mst_ProcessDataType.findMany({
                select:{
                    jkprocess_cd:true,
                    jkprocess_nm:true
                }
            });
            return res.status(200).send(
                        response_format.response2( 200, true, "List Data Process Type", response)
                    );
        } catch (error) {
            res.status(500).json({msg: error.message});
        }
    }
}

module.exports = new ProcessTypeController()