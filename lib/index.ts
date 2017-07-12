import {join} from 'path';
import {Config} from './config.interface';
import {Server} from './server/server';

let config: Config = require(join('..', 'rest-bed.config.json'));

Server.bootstrap(config).app.listen(config.port, () => {
    console.log(`Listening on port ${config.port}`);
});