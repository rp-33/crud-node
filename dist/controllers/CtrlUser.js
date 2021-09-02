'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.deleteUser = exports.editUser = exports.getUsers = exports.createUser = undefined;

var _SchemaUser = require('../models/SchemaUser');

var _SchemaUser2 = _interopRequireDefault(_SchemaUser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createUser = exports.createUser = async function createUser(req, res) {
	try {
		var _req$body = req.body,
		    name = _req$body.name,
		    lastName = _req$body.lastName,
		    mail = _req$body.mail,
		    ci = _req$body.ci,
		    phone = _req$body.phone;


		var person = await _SchemaUser2.default.findOne({ $or: [{ mail: mail.toLocaleLowerCase() }, { ci: ci }] }, { mail: true, ci: true });

		if (person) return res.status(400).send({ error: 'Mail or identity card already exists.' });

		person = new _SchemaUser2.default({
			name: name,
			lastName: lastName,
			mail: mail,
			ci: ci,
			phone: phone
		});

		await person.save();

		res.status(201).send({ message: 'Was successfully saved' });
	} catch (err) {
		res.status(500).send({ error: 'Server error' });
	}
};

var getUsers = exports.getUsers = async function getUsers(req, res) {
	try {
		var users = await _SchemaUser2.default.find();
		res.status(200).send(users);
	} catch (err) {
		res.status(500).send({ error: 'Server error' });
	}
};

var editUser = exports.editUser = async function editUser(req, res) {
	try {
		var _req$query = req.query,
		    name = _req$query.name,
		    lastName = _req$query.lastName,
		    mail = _req$query.mail,
		    ci = _req$query.ci,
		    phone = _req$query.phone;
		var id = req.params.id;


		var user = await _SchemaUser2.default.updateOne({ _id: id }, { $set: { name: name, lastName: lastName, mail: mail, ci: ci, phone: phone } });
		if (user.n > 0 && user.ok > 0) return res.status(201).send({ message: 'Was successfully saved' });
		res.status(400).send({ error: 'Could not update' });
	} catch (err) {
		res.status(500).send({ error: 'Server error' });
	}
};

var deleteUser = exports.deleteUser = async function deleteUser(req, res) {
	try {
		var _id = req.query._id;

		var result = await _SchemaUser2.default.deleteOne({ _id: _id });
		if (result.n > 0 && result.ok > 0) return res.status(201).send({ message: 'Deleted user' });
		res.status(400).send({ error: 'Could not delete' });
	} catch (err) {
		res.status(500).send({ error: 'Server error' });
	}
};
//# sourceMappingURL=CtrlUser.js.map