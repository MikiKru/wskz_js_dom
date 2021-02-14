p_prop = document.querySelector("#properties");
console.log(p_prop.parentElement);
console.log(p_prop.closest("div"));
console.log(p_prop.closest("body"));
console.log(p_prop.nextElementSibling);
console.log(p_prop.previousElementSibling);

p_ref = document.querySelector("#reflink");
// console.log(p_ref.children);
console.log("children");
for (var i = 0; i < p_ref.children.length; i++) {
    console.log("child " + i + " = " + p_ref.children[i].innerHTML +
        " tag: " + p_ref.children[i].tagName
    );
}