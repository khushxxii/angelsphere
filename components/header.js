document.addEventListener('DOMContentLoaded', function() {
    const header = `
        <header>
            <div id="logo">
                <h1>AngelSphere Innovations</h1>
            </div>
            <nav>
                <ul>
                    <li><a href="index.html">Home</a></li>
                    <li><a href="about.html">About Us</a></li>
                    <li><a href="services.html">Services</a></li>
                    <li><a href="projects.html">Projects</a></li>
                    <li><a href="contact.html">Contact</a></li>
                </ul>
            </nav>
        </header>
    `;
    document.body.insertAdjacentHTML('afterbegin', header);
});
