document.addEventListener('DOMContentLoaded', function() {
    const revealBtn = document.getElementById('reveal-btn');
    const secretText = document.getElementById('secret-text');

    revealBtn.addEventListener('click', function() {
        if (secretText.classList.contains('hidden')) {
            secretText.classList.remove('hidden');
            revealBtn.textContent = 'Segredo Revelado';
            revealBtn.disabled = true;
        }
    });
});