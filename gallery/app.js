function getElement(selection) {
  const element = document.querySelector(selection);
  if (element) {
    return element;
  }
  throw new Error(
    `Please check "${selection}" selector, no such element exists`,
  );
}

class Gallery {
  constructor(element) {
    this.container = element;
    this.list = [...element.querySelectorAll(".img")];
    // target
    this.modal = getElement(".modal");
    this.modalImg = getElement(".main-img");
    this.imageName = getElement(".image-name");
    this.modalImages = getElement(".modal-images");
    this.closeBtn = getElement(".close-btn");
    this.nextBtn = getElement(".next-btn");
    this.prevBtn = getElement(".prev-btn");
    // bind functions

    this.closeModal = this.closeModal.bind(this);
    this.nextImage = this.nextImage.bind(this);
    this.prevImage = this.prevImage.bind(this);
    this.chooseImage = this.chooseImage.bind(this);

    this.container.addEventListener(
      "click",
      function (e) {
        if (e.target.classList.contains("img")) {
          this.openModal(e.target, this.list);
        }
      }.bind(this),
    );
  }
  openModal(selectedImage, list) {
    this.setMainImage(selectedImage);
    this.modalImages.innerHTML = list
      .map(function (image) {
        return `<img src="${
          image.src
        }" title="${image.title}" data-id="${image.dataset.id}" class="${selectedImage.dataset.id === image.dataset.id ? "modal-img selected" : "modal-img"}"/>`;
      })
      .join("");

    // list
    //   .map((image) => {
    //     return `<img src="${image.src}" title="${image.title}" data-id="${
    //       image.dataset.id
    //     }" class="${
    //       selectedImg.dataset.id === image.dataset.id
    //         ? "modal-img selected"
    //         : "modal-img"
    //     }"`;
    //   })
    //   .join("");
    this.modal.classList.add("open");
  }
  setMainImage(selectedImg) {
    this.modalImg.src = selectedImg.src;
    this.imageName.textContent = selectedImg.title;
  }
  closeModal() {
    this.modal.classList.remove("open");
    this.closeBtn.removeEventListener("click", this.closeModal);
    this.nextBtn.removeEventListener("click", nextImage);
    this.prevBtn.removeEventListener("click", prevImage);
  }
  nextImg() {}
}

const nature = new Gallery(getElement(".nature"));
const city = new Gallery(getElement(".city"));
