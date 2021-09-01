'use strict';

import mongoose from 'mongoose';

mongoose.connect(config.db.port,{useCreateIndex: true, useNewUrlParser: true})
.then(db => console.log(config.db.port + ' is conected '))
.catch(err => console.log(err));


export default mongoose;
