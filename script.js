document.addEventListener('DOMContentLoaded', () => {
    // Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Form Validation
    const registrationForm = document.getElementById('registrationForm');
    if (registrationForm) {
        registrationForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const businessType = document.getElementById('businessType').value;

            if (name && email && businessType) {
                alert('Registration successful!');
                // Here you can add code to send the form data to the server
            } else {
                alert('Please fill in all fields.');
            }
        });
    }

    // Dynamic Content Loading
    const loadMoreButton = document.getElementById('loadMoreButton');
    if (loadMoreButton) {
        loadMoreButton.addEventListener('click', function () {
            const additionalContent = document.createElement('div');
            additionalContent.innerHTML = `
                <h3>Work In progress</h3>
                <p>In constructions</p>
            `;
            document.querySelector('#additionalContent').appendChild(additionalContent);
            this.style.display = 'none'; // Hide the button after loading content
        });
    }

    // Interactive Features
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        item.addEventListener('click', function () {
            const content = this.querySelector('.faq-content');
            content.classList.toggle('active');
        });
    });

    // Tooltips for Features
    const features = document.querySelectorAll('.feature');
    features.forEach(feature => {
        feature.addEventListener('mouseover', function () {
            const tooltip = this.querySelector('.tooltip');
            if (tooltip) {
                tooltip.style.display = 'block';
            }
        });

        feature.addEventListener('mouseout', function () {
            const tooltip = this.querySelector('.tooltip');
            if (tooltip) {
                tooltip.style.display = 'none';
            }
        });
    });
});