import * as express from 'express';
import * as cookieParser from 'cookie-parser';
import {Config} from "../config.interface";

export class Server {

    public app: express.Application;
    private router: express.Router;

    constructor(private config: Config) {
        this.app = express();
        this.app.use(cookieParser());
        this.router = express.Router();
        this.setupRoutes();
    }

    private setupRoutes() {
        this.config.microservices.map(service => {
            this.app.use(this.router.get(service.route, (req, res) => {

                console.log('Cookies: ', req.cookies);

                res.send(service.route);
            }));
        })
    }

    public static bootstrap(config: Config): Server {
        return new Server(config);
    }
}