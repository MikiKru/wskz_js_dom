const p_properties = document.querySelector("#properties");
p_properties.classList.add("atributes");
console.log("Czy zawiera klasę atributes:" + p_properties.classList.contains("atributes"));
console.log("Czy zawiera klasę header2:" + p_properties.classList.contains("header2"));
p_properties.classList.remove("atributes");
console.log("Czy zawiera klasę atributes:" + p_properties.classList.contains("atributes"));

const h1 = document.querySelector("h1");
h1.classList.toggle("atributes");
h1.classList.toggle("atributes");

const thead = document.querySelector("thead");
thead.setAttribute("style", "font-weight: bold");

thead.style.setProperty("background-color","blue");
thead.style.setProperty("font-family","Arial");

console.log(thead.style.getPropertyValue("font-weight"));
console.log(thead.style.getPropertyValue("background-color"));
console.log(thead.style.getPropertyValue("font-family"));

