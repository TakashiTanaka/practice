'use strict';

{
	class Panel {
		constructor() {
			// sectionのみconstなのは、sectionはconstructor内でしか使用しないから
			// 一方、thisをつけたものは、他のメソッドで使用するため
			const section = document.createElement('section');
			section.classList.add('panel');

			this.icon = document.createElement('div');
			this.icon.textContent = this.getRandomIcon();
			this.icon.classList.add('icon');

			this.timeOutId = undefined;

			this.stop = document.createElement('div');
			this.stop.textContent = 'STOP';
			this.stop.classList.add('stop', 'inactive');
			this.stop.addEventListener('click', () => {
				if (this.stop.classList.contains('inactive')) {
					return;
				}
				this.stop.classList.add('inactive');
				clearTimeout(this.timeOutId);

				panelsLeft--;

				if (panelsLeft === 0) {
					spin.classList.remove('inactive');
					panelsLeft = 3;
					checkResult();
				}
			});

			section.appendChild(this.icon);
			section.appendChild(this.stop);

			const main = document.querySelector('main');
			main.appendChild(section);
		}

		getRandomIcon() {
			const icons = [
				'🐶', '🐹', '🐭', '🐼', '🐦',
			];
			return icons[Math.floor(Math.random() * icons.length)];
		}

		spin() {
			this.icon.textContent = this.getRandomIcon();
			this.timeOutId = setTimeout(() => {
				this.spin();
			}, 50);
		}

		isUnmatched(p1, p2) {
			return this.icon.textContent !== p1.icon.textContent && this.icon.textContent !== p2.icon.textContent;
		}

		unmatch() {
			this.icon.classList.add('unmatched');
		}

		activate() {
			this.icon.classList.remove('unmatched');
			this.stop.classList.remove('inactive');
		}
	}

	function checkResult() {
		if (panels[0].isUnmatched(panels[1], panels[2])) {
			panels[0].unmatch();
		}
		if (panels[1].isUnmatched(panels[0], panels[2])) {
			panels[1].unmatch();
		}
		if (panels[2].isUnmatched(panels[0], panels[1])) {
			panels[2].unmatch();
		}
	}

	const panels = [
		new Panel(),
		new Panel(),
		new Panel(),
	];

	let panelsLeft = 3;

	const spin = document.getElementById('spin');
	spin.addEventListener('click', () => {
		if (spin.classList.contains('inactive')) {
			return;
		}
		spin.classList.add('inactive');
		panels.forEach(panel => {
			panel.activate();
			panel.spin();
		});
	});
}