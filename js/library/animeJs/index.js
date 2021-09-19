el1.addEventListener('click', function () {
	anime({
		targets: el1,
		translateX: 250
	})
})

el2.addEventListener('click', function () {
	anime({
		targets: el2,
		backgroundColor: '#FFF',
		borderRadius: ['50%', '0%'],
		easing: 'easeInOutQuad'
	})
})

el3.addEventListener('click', function () {
	anime({
		targets: el3,
		translateX: 250,
		duration: 50000
	})
})

el4.addEventListener('click', function () {
	anime({
		targets: el4,
		translateX: 250,
		delay: 1000
	})
})

el5.addEventListener('click', function () {
	anime({
		targets: el5,
		translateX: {
			value: 250,
			duration: 800
		},
		rotate: {
			value: 360,
			duration: 1800,
			easing: 'easeInOutSine'
		},
		scale: {
			value: 2,
			duration: 1600,
			delay: 800,
			easing: 'easeInOutQuart'
		},
		delay: 250 // All properties except 'scale' inherit 250ms delay
	})
})