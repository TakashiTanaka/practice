const returnF = (msg) => {
	return () => {
		console.log(msg)
	}
}

console.log(returnF('hey'));