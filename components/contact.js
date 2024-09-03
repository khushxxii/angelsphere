document.addEventListener('DOMContentLoaded', function() {
    const contact = `
        <main>
            <section id="contact">
                <h2>Contact Us</h2>
                <p>Get in touch with us to discuss your next project.</p>
                <form id="contactForm">
                    <label for="name">Name:</label>
                    <input type="text" id="name" name="name" required><br><br>

                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" required><br><br>

                    <label for="message">Message:</label>
                    <textarea id="message" name="message" required></textarea><br><br>

                    <button type="submit">Send Message</button>
                </form>
            </section>
        </main>
    `;
    document.body.insertAdjacentHTML('beforeend', contact);

    // Form submission handling
    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        const mailtoLink = `mailto:khushisingh7205@gmail.com?subject=Contact%20Form%20Submission&body=Name:%20${encodeURIComponent(name)}%0AEmail:%20${encodeURIComponent(email)}%0AMessage:%20${encodeURIComponent(message)}`;

        window.location.href = mailtoLink;
        alert('Thank you for contacting us! Your message has been sent.');
    });
});
