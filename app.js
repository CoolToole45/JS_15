// Task 1:

const currentDay = new Date().getDay();
currentDay[0] = "კვირა";
currentDay[1] = "ორშაბათი";
currentDay[2] = "სამშაბათი";
currentDay[3] = "ოთხშაბათი";
currentDay[4] = "ხუთშაბათი";
currentDay[5] = "პარასკევი";
currentDay[6] = "შაბათი";

switch (currentDay) {
    case currentDay[0]:
        console.log("დღეს არის კვირა");
        break;
    case currentDay[1]:
        console.log("დღეს არის ორშაბათი");
        break;
    case currentDay[2]:
        console.log("დღეს არის სამშაბათი");
        break;
    case currentDay[3]:
        console.log("დღეს არის ოთხშაბათი");
        break;
    case currentDay[4]:
        console.log("დღეს არის ხუთშაბათი");
        break;
    case currentDay[5]:
        console.log("დღეს არის პარასკევი");
        break;
    case currentDay[6]:
        console.log("დღეს არის შაბათი");
        break;
    default:
        console.log("Error...")
}


// Task 2:

for (let i = 0; i < 100; i++) {
    console.log("Task 2: " + i);
}


// Task 3:

let i = 0;

while (i < 50) {
    i++;
    console.log("Task 3: " + i);
}


// Task 4:

let index = 0;

do {
    index++;
    console.log("Task 4: " + index);
} while (index > 150);


// Task 5:

const numArray = [];

for (let i = 0; i < 1000; i++){
    numArray.push(i * i);
    console.log(numArray);
}


// Task 6(attempt):

const num_Array = [10, 9, 9, 8, 8, 11, 8, 0, 9, 1];

let firstBiggest = numArray[0];
let secondBiggest = numArray[0];
for (let i = 0; i < numArray.length; i++){
    if (numArray[i] > firstBiggest){
        secondBiggest = firstBiggest;
        firstBiggest = numArray[i];
    }
    else if (numArray[i] > secondBiggest && numArray[i] != firstBiggest){
        secondBiggest = numArray[i];
    }
}

console.log(secondBiggest);




const testArray = [2, 3, 6, 6, 5];
// Must get second biggest number
// Answer must be 5
// let firstBiggest = testArray[0];
// let secondBiggest = testArray[0];
// for (let i = 0; i < testArray.length; i++){
//     if (testArray[i] > firstBiggest){
//         secondBiggest = firstBiggest;
//         firstBiggest = testArray[i];
//     }
//     else if (testArray[i] > secondBiggest && testArray[i] != firstBiggest){
//         secondBiggest = testArray[i];
//     }
// }

// console.log(secondBiggest);