(async function () {
	window.onLoad = function () {
		fetch("JSON.json")
		.then(response => response.json())
		.then(data => {
			var name = data[1].name;
			var age = data[0].age;
			const content = `
			<span style="color:#FF0000">${name}</span><br>
			<span style="color:#00FF00">${age}</span>`
			document.getElementById("body").innerHTML = content;
		})
	}
})
