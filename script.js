import PhotoSwipe from "./libs/photoswipe/photoswipe.js";

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
    ];

    const items = images.map((image) => ({
        src: `${imageFolder}/${image}`,
        width: 825,
        height: 1125,
        alt: image
    }));

    images.forEach((image, index) => {
        const link = document.createElement("a");
        link.href = `${imageFolder}/${image}`;
        link.setAttribute("data-pswp-width", "825");
        link.setAttribute("data-pswp-height", "1125");

        const img = document.createElement("img");
        img.src = `${imageFolder}/${image}`;
        img.alt = image;

        link.appendChild(img);
        galleryContainer.appendChild(link);

        link.addEventListener("click", (event) => {
            event.preventDefault();
            const pswp = new PhotoSwipe({
                dataSource: items,
                index: index,
                bgOpacity: 0.8,
                showHideOpacity: true
            });
            pswp.init();
        });
    });
});
