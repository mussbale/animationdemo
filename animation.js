function enable_vibration() {
	const vib_text = document.getElementById('vibrate-personal-info');
	vib_text.classList.add('text-vibrate');
	setTimeout(disable_vibration, 800);
}

function disable_vibration() {
	const vib_text = document.getElementById('vibrate-personal-info');
	vib_text.classList.remove('text-vibrate');
	setTimeout(enable_vibration, 800);
}

setTimeout(enable_vibration, 500);
