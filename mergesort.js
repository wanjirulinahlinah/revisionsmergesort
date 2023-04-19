
//Given an array of unsorted numbers,return the index of the following target if
//let num = [1,4,6,8,49,88,90]
//let target =4
function divideArray(num){

    if (num.length <=1){
        return num;
    }
    let middle = Math.floor(num.length/2);
    let left =num.slice(0,middle);
    let right=num.slice(middle);
    return sortedNum(divideArray(left),divideArray(right));
}
function sortedNum(left,right){
    let emptyArray=[];
    while(left.length&&right.length){
    if(left[0]<right[0]) {
        emptyArray.push(left.shift());
    } 
    else{
        emptyArray.push((right.shift()));

    }
    
    }
    return[...emptyArray,...left,...right] ;
}
let num =[1,4,6,8,49,88,90];
console.log(divideArray(num));

function binarysearch(num,target){

    let left=0;
    let right=num.length-1

    while(left<=right){
        let middle=Math.floor((left+right)/2)
        if(num[middle]===target){
        return middle;
        }
        else if (num[middle]>target){
        right=middle-1;
    

    }
    else{
left=middle+1;
    }
}``
return null;


}
let numm=[1,4,6,8,49,88,90];
target =4;
console.log(binarysearch(numm,target));



