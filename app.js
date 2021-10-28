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

for (let i = 0; i < 101; i++) {
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