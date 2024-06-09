document.addEventListener("DOMContentLoaded"
    , function () {
        const galleryItems =
            document.querySelectorAll(".gallery-item-img");

galleryItems.forEach(item => {
    item.addEventListener("click",
        function () {
            const modal =
                document.createElement("div");
            modal.classList.add("modal");
            modal.innerHTML = `
    <div class="modal-content">
    <span class="close">&times;</span>
    <img src="${this.src}" alt="${this.alt}">
    </div>
    
    `;

            document.body.appendChild(modal);
            const closeBtn =
                modal.querySelector(".close");

            closeBtn.addEventListener("click",
                function () {
                    document.body.removeChild(modal);
                });
            modal.addEventListener("click",
                function (event) {
                    if (event.target === modal) {
                        document.body.removeChild(modal);
                    }
                });
        });

});
});

// gallery 02

document.querySelectorAll('.image-strip').forEach((strip, index) => {
    strip.addEventListener('click', () => {
        const images = ['fennec_fox.jpg','humpback_whale.jpg','common_brown_baboon.jpg','spotted_deer.jpg'];
        const currentImage =
        strip.style.backgroundImage.slice(5, -2);

        let newIndex = 
        (images.indexOf(currentImage) + 1) %
        images.length;
        strip.style.backgroundImage = `url(${images[newIndex]})`;
    });

});

