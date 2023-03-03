import {validationResult} from "express-validator";

class HandleValidation{
    HandleValidationError(req, res, next ){
            const error = validationResult(req)
            if (!error.isEmpty()){
                return res.json(error)
            }
            next();
    }
}
export default  new HandleValidation()