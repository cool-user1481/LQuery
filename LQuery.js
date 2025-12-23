// Selector Shorthand
// So useful fr fr
function $(selector){
    return document.querySelector(selector);
}
function $$(selector){
    return document.querySelectorAll(selector);
}

// This one loops through elements doing the code on each of them.
function _(selector, forAll){
    document.querySelectorAll(selector).forEach(forAll(element, index, array))
}
/*
sample usage:
_("input", (element, index, array)=>{
  element.removeAttribute("maxLength");
  console.log(`${element}, the ${index}th item in the array ${array} had code acted upon it!`)
})
*/
