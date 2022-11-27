//Question1 


//Task1
function getItem() {
    console.log(this);
}

getItem();  //Inside function keyword this references global object . It might be window object or undefined


//Task2
class Item {
    title ="Ball";
    getItem() {
        console.log("this",this);
    }
}

const  item = new Item();
item.getItem();


