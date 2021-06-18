const rootElement = document.querySelector('#root');

const element = React.createElement("div", {
	className: "wrapper",
	
	children: [
		React.createElement("h1", {}, "Это обертка для элементов на странице"),
		React.createElement("div", {
			className: "inner1",
			children: [
				React.createElement("h2", {className: "inner__header"}, "Заголовок внутреннего элемента 1"),
			]
		}),
		React.createElement("div", {
			className: "inner2",
			children: [
				React.createElement("h2", {className: "inner__header"}, "Заголовок внутреннего элемента 2"),

			]
		})
	]
});





ReactDOM.render(element, rootElement);