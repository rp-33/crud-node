'use strict';

import app from './app';
import ip from 'ip';
import http from 'http';
import database from './configurations/database';

http.createServer(app).listen('8888', () => {			
	console.log(`listener ${ip.address()}:${app.get('port')}`);
})
