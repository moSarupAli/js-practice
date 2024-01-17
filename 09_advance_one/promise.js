/* const promiseOne = new Promise(function (resolve, reject) {
    // do an async task
    // DB calls, cryptography related task, network calls
    // but for the time being we are gonna use setTimeout()
    setTimeout(function () {
        console.log('Async task is complete');
        resolve(); // resolve directly connected to then
    }, 1000);
});

promiseOne.then(function () {
    console.log("Promise consumed");
}); */


// now promise and then together, we can also do in this way, works same in both ways
/* new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("Async task 2");
        resolve();
    }, 1000);
}).then(function () {
    console.log("Async 2 resolved");
}); */



/* const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve({ username: "chai", email: "chai@example.com" })
    }, 1000);
});

promiseThree.then(function (user) {
    console.log(user);
}); */



/* const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true;
        if (!error) {
            resolve({ username: "Sarup", password: "123" });
        }
        else {
            reject('ERROR: something went wrong');
        }
    }, 1000);
});

promiseFour
    .then((user) => {
        console.log(user);
        return user.username;
    })
    .then((username) => {
        console.log(username);
    })
    .catch(function (error) {
        console.log(error);
    })
    .finally(() => {
        console.log("The promise is either resolved or rejected");
    })
    ;
 */


// now alternative way of using "then catch finally" chain - that
// is usning "async and await"
/* const promiseFive = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true;
        if (!error) {
            resolve({ username: "JavaScript", password: "123" });
        }
        else {
            reject('ERROR: JavaScript went wrong');
        }
    }, 1000);
});

async function consumePromiseFive() {
    try {
        const response = await promiseFive;
        console.log(response);
    } catch (error) {
        console.log(error);
    }
};

consumePromiseFive();
 */



/* async function getAllUsers(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        // console.log(response);
        const data = await response.json(); // "response.json()" also takes time, so we have to "await" this
        console.log(data);
    } catch (error) {
        console.log("E: ", error);
    }
};

getAllUsers(); */



fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
    })
    .catch((error) => console.log(error))
    ;




