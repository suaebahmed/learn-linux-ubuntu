// run this file $ node index.js
class App{

    static x = 100;
    greeting(name){
        console.log(name+', how are you?')
    }
    static ans(){
        console.log('Not too bad. thanks')
    }
}


// no related with object
App.ans();
console.log(App.x)

let obj = new App();
obj.greeting('suaeb');
