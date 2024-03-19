import conf from "../conf/conf";
// Import the necessary modules from "appwrite"
import { Client, Account, ID } from "appwrite";

export class AuthService {
    // Create a new instance of the Client class
    client = new Client();
    account;

    constructor() {
        // Setting up the client instance
        this.client
            .setEndpoint(conf.appwriteUrl) // Set the Appwrite endpoint URL
            .setProject(conf.appwriteProjectId); // Set the Appwrite project ID

        // Creating an instance of the Account class with the client
        this.account = new Account(this.client);
    }

    async createAccount({ email, password, name }) {
        try {
            // Create a user account using the Appwrite Account API
            const userAccount = await this.account.create(
                ID.unique(),
                email,
                password,
                name
            );
            // Check if the user account was created successfully
            if (userAccount) {
                // If successful, call another method (likely a login method) to log in the user
                return this.login({ email, password });
            } else {
                // If the account creation was not successful, return the userAccount (which might be an error object)
                return userAccount;
            }
        } catch (error) {
            // If an error occurs during the account creation or login, throw the error
            throw error;
        }
    }

    async login({ email, password }) {
        try {
            // Attempt to create an email session to log in the user
            return await this.account.createEmailSession(email, password);
        } catch (error) {
            // If an error occurs during the login process, throw the error
            throw error;
        }
    }

    async getCurrentUser() {
        try {
            // Attempt to retrieve information about the currently authenticated user
            return await this.account.get();
        } catch (error) {
            // If an error occurs during the retrieval process, log the error
            console.log("Appwrite service :: getCurrentUser :: error ", error);
        }
        // Return null if there was an error or no user is authenticated
        return null;
    }

    async logout() {
        try {
            // Attempt to delete the user's sessions or invalidate authentication tokens
            await this.account.deleteSessions();
        } catch (error) {
            // If an error occurs during the logout process, log the error
            console.log("Appwrite service :: logout :: error ", error);
        }
    }
}

const authService = new AuthService();
export default authService;