import  mongoose from 'mongoose';
import { Friends } from './dbConnector';

// class Friend {
//     constructor(id,{firstName,lastName,gender,age,language,email,contacts}){
//         this.id = id;
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.gender = gender;
//         this.age = age;
//         this.language = language;
//         this.email = email;
//         this.contacts = contacts;
//     }
// } 

// const friendDataBase = {};


// const friendDatabase = {};

// resolver map
export const resolvers = {
    Query: {
        getFriend: (root,{ id }) => {
            return new Friend(id, friendDatabase[id]);
        }
    },
    Mutation: {
        createFriend: (root,{ input }) => {
            // let id = require('crypto').randomBytes(10).toString('hex');
            // friendDatabase[id] = input;
            // return new Friend(id, input);

            const newFriend = new Friends({
                firstName: input.firstName,
                lastName: input.lastName,
                gender : input.gender,
                age : input.age,
                language : input.language,
                email : input.email,
                contacts : input.contacts,

            });

            newFriend.id  = newFriend._id;

            return new Promise((resolve, object)=>{

                newFriend.save((err) =>{
                    if (err) reject(err)
                    else resolve(newFriend)
                })
            })


        },
    },
};

