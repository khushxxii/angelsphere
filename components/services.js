document.addEventListener('DOMContentLoaded', function() {
    const services = `
        <main>
            <section id="services">
                <h2>Our Services</h2>
                <ul>
                    <li>Custom Software Development</li>
                    <li>Cloud Solutions</li>
                    <li>Mobile App Development</li>
                    <li>AI and Machine Learning Integration</li>
                </ul>
            </section>
        </main>
    `;
    document.body.insertAdjacentHTML('beforeend', services);
});
