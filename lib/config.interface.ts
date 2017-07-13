export interface Config {
    port: number;
    basePath: string;
    microservices: MicroService[];
}

export interface MicroService {
    route: string;
}