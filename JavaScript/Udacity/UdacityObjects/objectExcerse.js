
const facebookProfile = {
    name: "Rails  Abam",
    friends: 100,
    message: ["Welcome to my ", "list of friends"],

 
    postMessage: function (messages) {
        return facebookProfile.message.push(messages);
        
        
    },
    deleteMessage: function index () {
       return  facebookProfile.message.pop();
        
    },

    addFriend: function (){
    return facebookProfile.friends += 1;

   },

removeFriend: function() {
    return facebookProfile.friends -+ 1

    }
}
const result1 = facebookProfile.addFriend()
const result2 = facebookProfile.removeFriend()
const result3 = facebookProfile.postMessage(["new message"])
const result4 = facebookProfile.message
const result5 = facebookProfile.deleteMessage()
console.log(result1, result2, result3, result4, result5)


const facebookProfiles = {
    name: "Udacian",
    friends: 25,
    messages: ["Message 1", "Message 2", "Message 3", "Message 4"],
    postMessage: function(message){
        facebookProfiles.messages.push(message);
    },
    deleteMessage: function(index){
        // In the following splice() method call,
        // - argument 1 = index from where the element has to be deleted
        // - argument 2 = count of elements to be deleted
        facebookProfiles.messages.splice(index, 1);
    },
    addFriend: function(){
        facebookProfiles.friends = facebookProfiles.friends + 1;
        //friends += 1; // this statement is equivalent to the above
    },
    removeFriend: function(){
        if(facebookProfiles.friends>0)
            facebookProfiles.friends = facebookProfiles.friends - 1;
    }
};