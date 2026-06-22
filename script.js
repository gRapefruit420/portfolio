document.addEventListener('DOMContentLoaded', () => {
    const text = "Hálózat Üzemeltető";
    const speed = 100;
    let i = 0
    const typewriterElement = document.getElementById("typewriter")

    function typeWriter() {
        if (i < text.length) {
            typewriterElement.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
    }

    typeWriter();

    const sections = document.querySelectorAll('.content-section')

    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('appear');
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });

    const downloadBtn = document.getElementById('download-btn');
    if (downloadBtn) {
        downloadBtn.addEventListener('click', () => {
            window.print();
        })
    }
});