import URI from "urijs";

// /records endpoint
window.path = "http://localhost:3000/records";

// Your retrieve function plus any additional functions go here ...

var apiObjCall = {
    page: 0,
    colors: []    
};

function retrieve(apiObjCall){  
    //create a promise obj with code for retrieve function
    new Promise(function(resolve, reject){
        
        var size = Object.keys(apiObjCall).length;
        for(var x = 0; x++; x<=size){
            fetch(window.path)
        }
        resolve();
        reject()
    });
}
export default retrieve;
