// Selector Shorthand
// So useful fr fr
function $(selector){
    return document.querySelector(selector);
}
function $$(selector){
    return document.querySelectorAll(selector);
}

// This one loops through elements doing the code on each of them.
function codeOnQuery(selector, forAll){
    document.querySelectorAll(selector).forEach(forAll(element, index, array))
}
/*
sample usage:
codeOnQuery("input", (element, index, array)=>{
  element.removeAttribute("maxLength");
  console.log(`${element}, the ${index}th item in the array ${array} had code acted upon it!`)
})
*/

// keyDown function. I might need to change the name to W query soon...
const PREFIX_NOTHING_WILLUSE_keys = {};

//main function here! Easy keyDown system. Do keyDown(key:string) eg keyDown("h") and it will return true or false if it is pressed or not!
function keyDown(key){
    return !!PREFIX_NOTHING_WILLUSE_keys[key];
}

function PREFIX_NOTHING_WILLUSE_keyHandler(e){
    if(e.type!="keydown"){
        PREFIX_NOTHING_WILLUSE_keys[e.key] = false;
    } else{
        PREFIX_NOTHING_WILLUSE_keys[e.key] = true    
       }
}

addEventListener("keydown", PREFIX_NOTHING_WILLUSE_keyHandler);
addEventListener("keyup", PREFIX_NOTHING_WILLUSE_keyHandler);

function forEachInObject(object, forAll){
    for (const property in object) {
        const value = object[property];
        forAll(property, value, object);
    }
}
{ // Creates a local scope 
    function forEachInObject2(forAll){
        forEachInObject(this, forAll);
    }
    Object.prototype.forEach = forEachInObject2; // Cursed ahh thingy
}
