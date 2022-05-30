const person = {name: 'naim uddin', age: 25, job: 'web', gfName: 'nahida', address: 'SD Hall', phone: '01401686393', friends: ['anam', 'emon', 'rashed', 'ahad']};

const {gfName, phone} = person;

// console.log(gfName, phone);
// console.log(gfName, phone);

// console.log(person.gfName, person.address);

const friends = ['sakib', 'arman', 'salman', 'sharuk']
const [chotoFriend, nextFriend, ...restFriend] = friends;
console.log(chotoFriend, nextFriend);
console.log(restFriend); 



const complesObject = {
    name: 'nayon',
    info:{
        address: 'SD Hall',
        leader : 'Sir'
    }

}

const {leader} = complesObject.info;

console.log(leader);