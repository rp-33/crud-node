'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
var validate = function validate(req, res, next) {
	var mail = req.body.mail;

	var regex = /\S+@\S+\.\S+/;
	if (!regex.test(mail)) return res.status(400).send({ error: "Invalid mail format" });
	next();
};

exports.default = validate;
//# sourceMappingURL=validate.js.map