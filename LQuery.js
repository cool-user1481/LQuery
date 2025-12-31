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
_("input", (element, index, array)=>{
  element.removeAttribute("maxLength");
  console.log(`${element}, the ${index}th item in the array ${array} had code acted upon it!`)
})
*/

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
