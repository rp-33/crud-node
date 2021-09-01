'use strict';

import dotenv from 'dotenv';

dotenv.config();

let configuration = {
	server:{
		port : process.env.PORT || 8888
	},
 	db:{
 		port: process.env.MONGODB_URI || 'mongodb://localhost/crudnode'
 	}
};

export default configuration;
