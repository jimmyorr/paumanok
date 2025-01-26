document.addEventListener("DOMContentLoaded", () => {
    const galleryContainer = document.getElementById("gallery");
    const imageFolder = "./cards";
    const images = [
        "deck-back.png", "deck-blue-1.png", "deck-blue-2.png",
        "deck-blue-3.png", "deck-blue-4.png", "deck-blue-5.png",
        "deck-blue-6.png", "deck-green-1.png", "deck-green-2.png",
        "deck-green-3.png", "deck-green-4.png", "deck-green-5.png",
        "deck-green-6.png", "deck-purple-1.png", "deck-purple-2.png",
        "deck-purple-3.png", "deck-purple-4.png", "deck-purple-5.png",
        "deck-purple-6.png", "player-1.png", "player-2.png",
        "region-blue.png", "region-green.png", "region-purple.png",
        "rules-1.png", "rules-2.png", "rules-3.png", "rules-4.png",
    ]

    images.forEach((image) => {
        const link = document.createElement("a");
        link.href = `${imageFolder}/${image}`;
        link.setAttribute("data-pswp-width", "800"); // Replace with actual dimensions if possible
        link.setAttribute("data-pswp-height", "600");

        const img = document.createElement("img");
        img.src = `${imageFolder}/${image}`;
        img.alt = image;

        link.appendChild(img);
        galleryContainer.appendChild(link);
    });

    // Initialize PhotoSwipe
    const gallery = new PhotoSwipe({
        gallery: "#gallery",
        children: "a",
        pswpModule: PhotoSwipe,
    });
});
