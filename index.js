// Code your solutions in this file
const countDown =()=>{
    let count = 10;
    while(count > -1){
        console.log(count --);
    }
}

let messages = [];
const writeCards = (names, eventName) => {
    names.forEach((name) => {
        messages.push(`Thank you, ${name}, for the wonderful ${eventName} gift!`); 
    })
    return messages;
}