(() => {
	// hook up the JS File
	console.log("fired! ready to jam out");

	function playDrumSound(e) {
		// e in round brackets is the event object ->
		// gets generated with every event and passes some data through
		// debugger;
		// 
		// try selecting the matching audio element
		let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);

		// the return keyword stops javascript from running (any code below it)
		if (!audio) { return; }
		// audio == null
		
		//play the audio track
		audio.currentTime = 0;
		audio.play();

		// select the parent div and animate it
		//  try selecting the matching parent div element
		let key = document.querySelector(`div[data-key="${e.keyCode}"]`);
		key.classList.add('playing');
	}

	function removePlayingClass(e) {
		//listen for a CSS transition to finish and then reset the element
		//by removing the playing class

		if (e.propertyName !== "transform") {
			return;
		} else {
			console.log('do some stuff here, transition is done');
			e.currentTarget.classList.remove('playing');
		}
	}

	window.addEventListener('keydown', playDrumSound);

	// grab all of the keyboard keys that have the .key class applied
	const keys = Array.from(document.querySelectorAll('.key'));

	// add a transition end to each key so that we can reset it
	keys.forEach(key => key.addEventListener('transitionend', removePlayingClass))
})();