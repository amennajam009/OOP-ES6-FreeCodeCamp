//javascript promises exactly works like it sounds... 
//you use it to make a promise to do something, usually asynchronously. When the task completes, you either fulfill your promise or fail to do so.
//promise is a constructor function

const makeServerRequest = new Promise((resolve,rejected)=>{
    // this is the syntax of Promise constructor
});



//A promise has three states: pending, fulfilled, and rejected.

const makeServerRequest2 = new Promise((resolve, reject) => {
    // responseFromServer represents a response from a server
    let responseFromServer;
  
    if(responseFromServer) {
      resolve("We got the data");
    } else {	
      reject("Data not received");
    }
  });