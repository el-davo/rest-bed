export interface Config {
    port: number;
    microservices: MicroService[];
}

export interface MicroService {
    route: string;
}