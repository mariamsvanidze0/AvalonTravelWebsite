const btnsLearnMore = document.querySelectorAll('.btn');
const additionalContents = document.querySelectorAll('.additionalContent');

btnsLearnMore.forEach((btn, index) => {
    btn.addEventListener('click', function(event) {
        event.preventDefault();

        const additionalContent = additionalContents[index];

        if (additionalContent.style.display === 'none' || additionalContent.style.display === '') {
            additionalContent.style.display = 'block';
            this.textContent = 'Show Less'; 
        } else {
            additionalContent.style.display = 'none';
            this.textContent = 'Learn More'; 
        }
    });
});


