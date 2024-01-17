class User {
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static createId(){
        return `123`;
    }
}

const hitesh = new User("hitesh");
// console.log(hitesh.createId()); // creatId() method can't access using object, as it is Static mehod

class Teacher extends User {
    constructor(username, email){
        super(username);
        this.email = email;
    }
}

const iphone = new Teacher("iphone", "i@phone.com");
iphone.logMe();
// console.log(iphone.createId()); // creatId() method can't access using object, as it is Static mehod
