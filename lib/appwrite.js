import { Client, Account, ID } from 'react-native-appwrite';

export const appwriteConfig = {
    endpoint : 'https://cloud.appwrite.io/v1',
    platform : "com.hieunguyen.climbmate",
    projectId: "66642a88000c4e07c4ae",
    databaseId: "66642d790015fba83687",
    userCollectionId: "66642dab003c7a4abe6d",
    videoCollectionId: "66642de2000f7d65d5c5",
    fileBucketId: "6664308d0028e5a2585b "
}


// Init your React Native SDK
const client = new Client();

client
    .setEndpoint(appwriteConfig.endpoint) // Your Appwrite Endpoint
    .setProject(appwriteConfig.projectId) // Your project ID
    .setPlatform(appwriteConfig.platform) // Your application ID or bundle ID.
;


const account = new Account(client);

export const createAccount = () => {

    // Register User
    account.create(ID.unique(), 'me@example.com', 'password', 'Jane Doe')
        .then(function (response) {
            console.log(response);
        }, function (error) {
            console.log(error);
        });
}

