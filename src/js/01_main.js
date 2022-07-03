let galleryBlocks = document.querySelectorAll(".animated-thumbnails-gallery")

galleryBlocks.forEach(el => {
    lightGallery(el, {
        thumbnail: true,
    });
});