document.addEventListener('DOMContentLoaded', function() {
    const home = `
        <main>
            <section id="home">
                <h2 id="welcome-text">Welcome to AngelSphere Innovations</h2>
                <p>Your partner in cutting-edge software solutions.</p>
                <button id="change-text-btn">Change Text</button>
            </section>
        </main>
    `;
    document.body.insertAdjacentHTML('beforeend', home);

    // Add a button to change text
    document.getElementById('change-text-btn').addEventListener('click', function() {
        document.getElementById('welcome-text').textContent = 'Welcome to the Future of Innovation';
    });
});
