//question 13

let transports :string[]= ["car","bike","hayabhusa","prado"];
transports.forEach(transport=>{console.log(`I would like to my own ${transport}.`)});

//question 14
let friends:string[]=["abid","muhammad","sanobia"];
    for(let friend of friends){console.log(`i would like to invite in my grand dinner ${friend}`)};

    //question 15
    let notCame:string="sanobia";
    console.log(`${notCame}, you can't came in my dinner?`) 
    
    let newGuest:string= "aliza";
    friends[friends.indexOf (notCame)]=newGuest;

    friends.forEach(friend => {console.log(`i would like to invite in my grand dinner ${friend}`)});
