class User {
    constructor(email, password){
        this.email = email;
        this.password = password;
    }

    set password(value){
        this.randomName = value;
    }

    get password(){
        return this.randomName.toUpperCase();
    }

    
    set email(value){
        this._email = value;
    }

    get email(){
        return this._email.toUpperCase();
    }
}

const sarup = new User("sarup@ali.com", "abc");
console.log(sarup.password);
console.log(sarup.email);