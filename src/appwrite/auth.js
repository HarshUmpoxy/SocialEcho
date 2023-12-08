import config from "../config/config"
import {Client, Account, ID} from "appwrite"

//we will make a class and export it's object
//this class will be like a wrapper
//no matter (firebase, appwrite or mongoDB) what's inside
//it's internal implementation may change but encapsulation
//is applied very well here for future proof code

export class AuthService{
    client = new Client();
    account;

    constructor(){
        this.client
            .setEndpoint(config.appwriteUrl)
            .setProject(config.appwriteProjectId)
        this.account = new Account(this.client)
    }

    //creating account in appwrite platform
    async createAccount({email, password, name}){
        try{
            const userAccount = await this.account.create(ID.unique(), email, password, name)
            if(userAccount){
                //login also done on the way
                return this.login({email, password})
            }
            else{
                return userAccount
            }
        }
        catch(error){
            throw error;
        }
    }

    //login user
    async login({email, password}){
        try {
            return await this.account.createEmailSession(email, password);
        } catch (error) {
            throw error;
        }
    }

    //getting the current user
    async getCurrentUser(){
        try {
            return await this.account.get();
        } catch (error) {
           console.log("Appwrite service :: getCurrentUser :: error", error);
        }
    }

    //logout
    async logout() {

        try {
            await this.account.deleteSessions();
        } catch (error) {
            console.log("Appwrite serive :: logout :: error", error);
        }
    }
}

//creating an object
const authService = new AuthService();

export default authService;