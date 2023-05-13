let tempC=0;
let tempF=0;

let convertedF = convertedCtoF(tempC);
console.log(`${convertedF} when it is ${tempC}`)

function convertedCtoF(cDegree){
    fDegree=(cDegree*9/5)+32;


    return fDegree;
}


const convertedCtoF = cDegree => (cDegree * 9/5)+32;



const convertedCtoF = (cDegree) => {
    fDegree=(cDegree * 9/5)+32;
    return fDegree;
}
