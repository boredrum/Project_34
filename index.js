                                        //EXCERCISE 1

class Cola {
    constructor (brand, price){
        this.brand = brand;
        this.price = price;
    }
}
class Whiskey {
    constructor (brand, price){
        this.brand = brand;
        this.price = price;
    }
}
class Ice {
    constructor (price){
        this.price = price;
    }
}

let mixin = {
    vat(){return this.price += this.price*0.2},
    exciseDuty(){return this.price += this.price*0.3+10},
    singleTax(){return this.price += 1}
}
Object.assign(Cola.prototype, mixin);
Object.assign(Whiskey.prototype, mixin);
Object.assign(Ice.prototype, mixin);
    //у завданні написано виконати саме міксином, але можна також виконати так, як зазначено нижче
// Cola.prototype.vat = function(){return this.price += this.price*0.2};
// Whiskey.prototype.exciseDuty = function(){return this.price += this.price*0.3+10};
// Ice.prototype.singleTax = function(){return this.price += 1};

let cocaCola = new Cola('Coca-Cola', 10);
let johnWalker = new Whiskey('John Walker', 100);
let ice = new Ice(2);

console.log(cocaCola.vat());
console.log(johnWalker.exciseDuty());
console.log(ice.singleTax());


                                        //EXCERCISE 2
                                        
// let uniceString = function(input){
//     return new Set(input.split('; '))
// }

// console.log(uniceString("cherry; orange; cherry; banana"));


                                        //EXCERCISE 3

// let sortGoods = function(){
//     let list = [];
//     for (let i=0; i < document.body.querySelectorAll('ul li').length; i++){
//         if (document.body.querySelectorAll('ul li')[i]){
//             list.push(document.body.querySelectorAll('ul li')[i].innerHTML);
//         }
//     }
//     document.body.querySelector('ul').innerHTML = null;
//     list = Array.from(new Set(list));       //created Array from the organised list with Set method
//     for (let item of list){
//         document.body.querySelector('ul').innerHTML += `<li>${item}</li>`;
//     }
// }

// sortGoods();


                                        //EXCERCISE 4

// let mike = {name: 'Mike', age: 18};
// let bob = {name: 'Bob', age: 25};
// let nikola = {name: 'Nikola', age: 32};

// let userVisits = new Map();
// let visitsCount = function(siteVisits = 0){
//     let countVisits = siteVisits;
//     return function visits(user){
//         userVisits.set(user, ++countVisits)
//         return countVisits
//     }
// }

// let mikeVisits = visitsCount();
// let bobVisits = visitsCount();
// let nikolaVisits = visitsCount();

// mikeVisits(mike);
// mikeVisits(mike);
// mikeVisits(mike);
// bobVisits(bob);
// nikolaVisits(nikola);
// nikolaVisits(nikola);

// console.log(userVisits.get(mike));
// console.log(userVisits.get(bob));
// console.log(userVisits.get(nikola));