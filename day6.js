//question 16
let friends = ["abid", "muhammad", "aliza"];
console.log("good nnews, I arrange bigger dinner and more guests & friends.");
friends.unshift("sabahat", "arisha", "hussain");
friends.splice(friends.length / 2, 0, "hasina");
friends.push("sanobia");
friends.forEach(friend => { console.log(`dear friends ${friend} would you come my grand dinner party.`); });
//question 17
console.log("unfortunately, I can only two people for dinner");
while (friends.length > 2) {
    let removedFriend = friends.pop();
    console.log(`sorry, ${removedFriend} , I can't invite you for dinner`);
}
friends.splice(0, friends.length);
console.log(friends);
//question 18
let places = ["saudia arabia", 'dubai', 'japan', 'kashmir', 'china'];
console.log("original order:", places);
console.log("alphabetical order:", [...places].sort());
console.log("original order:", places);
console.log("reverse alphabetical order:", [...places].reverse());
console.log("original order:", places);
places.reverse();
console.log("reverse order:", places);
places.reverse();
console.log("original order:", places);
places.sort();
console.log("alphabetical order:", places);
places.reverse();
console.log("original order:", places);
export {};
