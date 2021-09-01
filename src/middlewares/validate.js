'use strict';


const validate = (req,res,next)=>{
	let {mail} = req.body;
	let regex = /\S+@\S+\.\S+/;
	if(!regex.test(mail)) return res.status(400).send({error : "Invalid mail format"});
	next();
}


export default validate;