const openButton = document.getElementById('openPopup');
const popup = document.getElementById('popup');
const closeButton = document.getElementById('closePopup');

openButton.addEventListener('click', () => {
    popup.style.display = 'block';
});

closeButton.addEventListener('click', () => {
    popup.style.display = 'none';
});
