'use strict';

import User from '../models/SchemaUser';

export const createUser = async(req,res)=>{
	try
	{
		let {
			name,
			lastName,
			mail,
			ci,
			phone
		} = req.body;

		let person = await User.findOne({$or:[{mail:mail.toLocaleLowerCase()},{ci:ci}]},{mail:true,ci:true});

        if(person) return res.status(400).send({error:'Mail or identity card already exists.'});    
 
        person = new User({
           name,
           lastName,
           mail,
           ci,
           phone
        })

        await person.save();

        res.status(201).send({
            _id: person._id,
            mail : person.mail,
            name : person.name,
            lastName : person.lastName,
            ci : person.ci,
            phone : person.phone
        })

	}
	catch(err)
	{
		res.status(500).send({error:'Server error'});
	}
}

export const getUsers = async(req,res)=>{
	try
	{
		let users = await User.find();
		res.status(200).send(users);
	}
	catch(err)
	{
		res.status(500).send({error:'Server error'});
	}
}

export const editUser = async(req,res)=>{
	try
	{
		let {
			_id,
			name,
			lastName,
			mail,
			ci,
			phone
		} = req.query;

        const user = await User.updateOne({_id},{$set:{name,lastName,mail,ci,phone}});
        if(user.n > 0 && user.ok > 0) return res.status(201).send({message : 'Was successfully saved'});
        res.status(400).send({error:'Could not update'});
	}
	catch(err)
	{
		res.status(500).send({error:'Server error'});
	}
}

export const deleteUser = async(req,res)=>{
	try
	{
		const {_id} = req.query;
		const result = await User.deleteOne({_id});
        if(result.n > 0 && result.ok > 0) return res.status(201).send({message : 'Deleted user'});
        res.status(400).send({error:'Could not delete'});
	}
	catch(err)
	{
		res.status(500).send({error:'Server error'});
	}
}