function pauseAnimations() {
    document.querySelectorAll('.text, .color-box').forEach(element => {
        element.style.animationPlayState = 'paused';
    });
}

function playAnimations() {
    document.querySelectorAll('.text, .color-box').forEach(element => {
        element.style.animationPlayState = 'running';
    });
}