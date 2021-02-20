class Friend {
    constructor(id,{firstName,lastName,gender,language,email}){
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.language = language;
        this.email = email;
    }
} 

const friendDataBase = {};

const resolvers = {
    getFriend: ( { id } )  => {
        return new Friend(id,friendDataBase[id]);
    },
    createFriend: ({input}) => {
            let id = require('crypto').randomBytes(10).toString('hex');
            friendDataBase[id] = input;
            return new Friend(id,input);    
    }
};

export default resolvers;