const prompts = require('prompt-sync')();


class SortingAlgo{
    array: number[] 
    constructor(array:number[]){
        this.array=array
    }

    bubbleSort(array=this.array) : number[]{
        let swap= true;
        while(swap) {  //for iterating till the end
            swap=false;  // 
            for (let i=0;i<array.length;i++){
                if (array[i] > array[i+1]){
                   //swap
                   let tempVar= array[i]
                   array[i] = array[i+1]
                   array[i+1]= tempVar
                   swap = true;  
                }
            }
            
        }
        return array
    }
    bubbleSortUsingFor(array=this.array) :number[] {
        let swap = false;  //
        for (let j=0;j<array.length;j++){  //for iterating till the end
            for (let i=0;i<array.length-j-1;i++){
                if (array[i] > array[i+1]){
                   //swap
                   let tempVar= array[i]
                   array[i] = array[i+1]
                   array[i+1]= tempVar
                   swap = true;  
                }
            }
            if (!swap) break;
        }
        return array
    }

}


let sortObj = new SortingAlgo([5, 4, 3, 2, 1]);

while (true) {
    let data= prompts('provide array for sorting: ')
    if (data.toLowerCase()==='q' || data.toLowerCase()==='quit') break;
    try{
        data= JSON.parse(data)
        if (!Array.isArray(data)) {
        console.log("Provided input is not an Array")
        continue;
    }
    }catch(err){
        console.log('Not a valid input')
        continue;
    }
    console.log(`Sorting Algorithms
    1. Bubble Sort Algorithm
    2. Bubble Sort Algorithm 2 (Faster)
    press y or yes to end the program`); 
    let algo = prompts('Choose between Algorithms: ');
    if (algo.toLowerCase() === "y" || algo.toLowerCase() === "yes") break;
    switch (algo) {
        case "1":
          console.log(sortObj.bubbleSort(data));
          break;
        case "2":
          console.log(sortObj.bubbleSortUsingFor(data));
          break;
        default:
          console.log("No input found");
          break;
    }
    const quit = prompts('Do you want continue? press y or yes: ')
    if (quit.toLowerCase()==='y'|| quit.toLowerCase()==='yes') {
        continue;
    }
    else{
        break;
    }    

    
}





// let startTime1 = performance.now()
// console.log(sortObj.bubbleSort())
// let endTime1= performance.now()
// console.log(`Call to bubbleSort took ${(endTime1 - startTime1).toFixed(1)} milliseconds`)

// let startTime2 = performance.now()
// console.log(sortObj.bubbleSortUsingFor())
// let endTime2= performance.now()
// console.log(`Call to bubbleSortUsingFor took ${(endTime2 - startTime2).toFixed(1)} milliseconds`)
// 1. [4,5,3,2,1]
//  2. [4,3,5,2,1]
//  3. [4,3,2,5,1]
//  4. [4,3,2,1,5]
