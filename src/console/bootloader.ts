
import {connect as connectDB, close as closeDB } from "../infra/db-connections"
import dotenv from 'dotenv'
// import Container from 'typedi';

export class Bootloader {

    protected static _instance: Bootloader;
    
    public static get Instance()
    {
        return this._instance || (this._instance = new this());
    }
    
    async loadConnections()
    {
        await connectDB();
    }
    
    protected constructor()
    {
        dotenv.config()
    }

    async bootstrap(){
        await this.loadConnections();
    }

    async down(){
        await closeDB();
    }
}

export default Bootloader.Instance;