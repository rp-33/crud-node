'use strict';

import dotenv from 'dotenv';

dotenv.config();

let configuration = {
	server:{
		port : process.env.PORT || 8888
	},
 	db:{
 		port: 'mongodb+srv://bigglee:pillow8nic@cluster0.okmzr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority' || 'mongodb://localhost/crudnode'
 	}
};

export default configuration;
