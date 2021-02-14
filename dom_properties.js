const h1 = document.getElementsByTagName("h1");
// console.log(h1);
const p = document.getElementsByTagName("p");
// console.log(p);
const h2 = document.querySelector("h2");
// console.log(h2);
const p_atribute = document.getElementsByClassName("atributes");
const p_properties = document.getElementById("properties");
// console.log(p_atribute);
// console.log(p_properties);
const p_atribute_qs = document.querySelector(".atributes");
const p_properties_qs = document.querySelector("#properties");
// console.log(p_atribute_qs);
// console.log(p_properties_qs);
// właściwości elemetów
console.log(h1[0].innerHTML);
h1[0].innerHTML = "Witaj na lekcji";
console.log(h2.outerHTML);
// get i set Attribute
console.log(p_atribute_qs.getAttribute("class"));
console.log("URL:" + document.querySelector("#wskz_ref").getAttribute("href"));
// p_properties_qs.removeAttribute("id");
p_properties_qs.setAttribute("class", "prop-class")
p_properties_qs.setAttribute("id", "new_prop")
console.log(p_properties_qs.outerHTML);
// tagname
console.log("TAG: " + document.querySelector("#wskz_ref").tagName);