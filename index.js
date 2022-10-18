//helper function
function convert(input){
    if ( input instanceof Array){
        return input.slice()
        }else {
        return Object.values(input)
    }
}

function myEach(arrayCollection, callBack){
    let newArray = convert(arrayCollection)
    for(let i = 0; i < newArray.length; i++){ 
        callBack(newArray[i])
    }
    return arrayCollection
} 

function myMap (collection, callBack){
    let newCollection = convert(collection)
    let newArray = []
    for(let i = 0; i < newCollection.length; i++){
        newArray.push(callBack(newCollection[i]))
    }
    return newArray
}

function myReduce(collection, callBack, acc){
    
   let newArray = convert(collection)
   if(acc === undefined ){
    acc = newArray[0]
    newArray = newArray.slice(1)
   }
   for(let i = 0; i < newArray.length; i++){
    acc = callBack(acc, newArray[i],newArray)

    // there are 3 arguments. First one is accumulator 
    // second: value
    // third: collection(newArray)
   }
   return acc
}

function myFind(collection, predicate){
    console.log(collection, predicate)
    let newArray = convert(collection)
//     if(newArray.values === true){
//         return predicate
// }else undefined
for(let i = 0; i < newArray.length; i++){
    if(predicate(newArray[i]))return newArray[i]


}
return undefined
}

    
    
    

    

        
        
