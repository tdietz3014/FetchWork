import URI from "urijs";

// /records endpoint
window.path = "http://localhost:3000/records";
var uri = new URI(window.path);
// Your retrieve function plus any additional functions go here ...

var apiObjCall = {
    page: 0,
    colors: []    
};

function retrieve(apiObjCall){  
    //create a promise obj with code for retrieve function
    new Promise(function(resolve, reject){       
        
        //check if path is successful, if not then throw error code
        fetch(uri).then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
              }
              reject();
        })     

        //search for each obj in the page
        var size = Object.keys(apiObjCall).length;
        for(var x = 0; x++; x<size){
            uri.search(apiObjCall);
        }

        //obj for returned keys
        var dataReturn = {
            ids: 0,
            open: 0,
            closedPrimaryCount: 0,
            previousPage: 0,
            nextPage: 0
        }
        resolve();
        
    });
}
export default retrieve;
