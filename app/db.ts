import { createConnection, Connection } from 'typeorm';
import config from "../config/config";
export default  class db {
    private connection: Connection;
    public async init(): Promise <Connection> {
        try {
             // @ts-ignore
            this.connection = createConnection({
                ...config.development,
                entities: [
                    __dirname + "/entities/*.*"
                ]
            });
        return this.connection;

        } catch(e) {
            console.log(e);
            throw e;
        }
       
    }

} 