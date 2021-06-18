let wrapper = document.createElement("div");
wrapper.className = "wrapper";
wrapper.innerHTML = "<h1>Это обертка для элементов на странице</h1>"

let inner1 = document.createElement("div");
inner1.className = "inner1";
let inner2 = document.createElement("div");
inner2.className = "inner2";


let innerHeader1 = document.createElement("h2");
innerHeader1.className = "inner__header";
innerHeader1.innerHTML = "Заголовок внутреннего элемента 1"

let innerHeader2 = document.createElement("h2");
innerHeader2.className = "inner__header";
innerHeader2.innerHTML = "Заголовок внутреннего элемента 2"


document.body.append(wrapper);
wrapper.append(inner1);
wrapper.append(inner2);
inner1.append(innerHeader1);
inner2.append(innerHeader2);