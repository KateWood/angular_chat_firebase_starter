angular
    .module("chatApp")
    .controller("ChatController", ChatController);

    // 1 - inject either '$firebaseObject' or '$firebaseArray' into our controller using the $inject method:
   ChatController.$inject = ['$firebaseArray']
    

    // 2 - add the $firebaseObject or $firebaseArray to our function arguments so we can use it!
 
    function ChatController($firebaseArray){
        var self = this;
        self.addChat = addChat; 
        self.chats = (function(){
            var ref = new Firebase("https://chat-app-classwork.firebaseio.com/");
            var chats = $firebaseArray(ref);
            return chats
        })();
        // 4 - then we attach this getChats() function to self.chats, so everytime we refer to self.chats, it is referring to the firebase Array.
        // attach it here...

        // 6 - then we attach this addChat function to self.addChat, so everytime we refer to self.addChat, it is referring to the firebase Array.
        // attach it here...
    
        // 3 - instead of hardcoding the self.chats array, we write a function that goes to firebase and gets the array for us:
        // we should call the function something like getChats(); 

        // 5 - the firebase Array has special commands that we use on it: '$add'
        // we can use this to build an addChat function to push chat objects to our array:
        function addChat(){
            self.chats.$add({message: self.text});
            self.text = null;
        }

        
		
    }
    
