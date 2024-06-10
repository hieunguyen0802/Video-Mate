import {
  Client,
  Account,
  ID,
  Avatars,
  Databases,
  Query,
} from "react-native-appwrite";

export const appwriteConfig = {
  endpoint: "https://cloud.appwrite.io/v1",
  platform: "com.hieunguyen.climbmate",
  projectId: "66642a88000c4e07c4ae",
  databaseId: "66642d790015fba83687",
  userCollectionId: "66642dab003c7a4abe6d",
  videoCollectionId: "66642de2000f7d65d5c5",
  fileBucketId: "6664308d0028e5a2585b ",
};

// Init your React Native SDK
const client = new Client();

client
  .setEndpoint(appwriteConfig.endpoint) // Your Appwrite Endpoint
  .setProject(appwriteConfig.projectId) // Your project ID
  .setPlatform(appwriteConfig.platform); // Your application ID or bundle ID.

const account = new Account(client);
const avatar = new Avatars(client);
const database = new Databases(client);

export const createAccount = async (formData) => {
  try {
    const newAccount = await account.create(
      ID.unique(),
      formData.email,
      formData.password,
      formData.userName
    );

    if (!newAccount) throw Error;

    const avatarUrl = avatar.getInitials(formData.userName);

    
    const newUser = await database.createDocument(
        appwriteConfig.databaseId,
        appwriteConfig.userCollectionId,
        ID.unique(),
        {
            accountId: newAccount.$id,
            email,
            userName,
            avatar: avatarUrl,
        }
    );
    
    console.log(newUser)
    
    await signIn(formData.email, formData.password);
    return newUser;
  } catch (error) {
    console.log(error.message);
    throw Error;
  }
};

export const signIn = async (email, password) => {
  try {
    // const session = await account.createEmailPasswordSession(email, password);
    // return session;

    if (!account.getSession()){
        const session = await account.createEmailPasswordSession(email, password)
        return session
    } else {
        await account.deleteSession("current")
        const session = await account.createEmailPasswordSession(email, password)
        return session
    }  
  } catch (error) {
    console.log(error)
    throw Error;
  }
};


export const getCurrentUser = async () => {
  try {
    const currentAccount = await account.get();
    if (!currentAccount) throw Error;

    // console.log(currentAccount, "current account");
    // console.log(currentAccount.$id, "account id")
    // const currentUser = await database.listDocuments(
    //   appwriteConfig.databaseId,
    //   appwriteConfig.userCollectionId,
    //   [Query.equal("accountId", currentAccount.$id)]
    // );

    // if (!currentUser) throw Error;
    // console.log(currentUser, "current user");
    
    
    return currentAccount;
  } catch (error) {
    console.log(error);
  }
};


export const signOut = async () => {
    try {
        await account.deleteSession("current")
    } catch (error) {   
        console.log(error)
    }
}