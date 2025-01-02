// const gallery = document.getElementById("gallery");
// const fileInput = document.getElementById("fileInput");
// const uploadButton = document.getElementById("uploadButton");

// // Load images from local storage
// document.addEventListener("DOMContentLoaded", () => {
//   const images = JSON.parse(localStorage.getItem("images")) || [];
//   images.forEach((image) => {
//     addImageToGallery(image.src, image.name);
//   });
// });

// // Handle file upload
// uploadButton.addEventListener("click", () => {
//   const files = fileInput.files;
//   const images = JSON.parse(localStorage.getItem("images")) || [];
//   for (const file of files) {
//     const reader = new FileReader();
//     reader.onload = (e) => {
//       const image = { src: e.target.result, name: file.name };
//       images.push(image);
//       localStorage.setItem("images", JSON.stringify(images));
//       addImageToGallery(image.src, image.name);
//     };
//     reader.readAsDataURL(file);
//   }
// });

// // Add image to gallery
// function addImageToGallery(src, name) {
//   const imgContainer = document.createElement("div");
//   imgContainer.classList.add("img-container");

//   const imgElement = document.createElement("img");
//   imgElement.src = src;
//   imgElement.alt = name;

//   const downloadButton = document.createElement("button");
//   downloadButton.textContent = "Download";
//   downloadButton.addEventListener("click", () => {
//     const a = document.createElement("a");
//     a.href = src;
//     a.download = name;
//     a.click();
//   });

//   const deleteButton = document.createElement("button");
//   deleteButton.textContent = "Delete";
//   deleteButton.addEventListener("click", () => {
//     imgContainer.remove();
//     const images = JSON.parse(localStorage.getItem("images")) || [];
//     const updatedImages = images.filter((image) => image.src !== src);
//     localStorage.setItem("images", JSON.stringify(updatedImages));
//   });

//   imgContainer.appendChild(imgElement);
//   imgContainer.appendChild(downloadButton);
//   imgContainer.appendChild(deleteButton);
//   gallery.appendChild(imgContainer);
// }


const gallery = document.getElementById("gallery");
const fileInput = document.getElementById("fileInput");
const uploadButton = document.getElementById("uploadButton");

// Load images from local storage
document.addEventListener("DOMContentLoaded", () => {
  const images = JSON.parse(localStorage.getItem("images")) || [];
  images.forEach((image) => {
    addImageToGallery(image.src, image.name);
  });
});

// Handle file upload
uploadButton.addEventListener("click", () => {
  const files = fileInput.files;
  const images = JSON.parse(localStorage.getItem("images")) || [];
  for (const file of files) {
    const reader = new FileReader();
    reader.onload = (e) => {
      const image = { src: e.target.result, name: file.name };
      images.push(image);
      localStorage.setItem("images", JSON.stringify(images));
      addImageToGallery(image.src, image.name);
    };
    reader.readAsDataURL(file);
  }
});

// Add image to gallery
function addImageToGallery(src, name) {
  const imgContainer = document.createElement("div");
  imgContainer.classList.add("img-container");

  const imgElement = document.createElement("img");
  imgElement.src = src;
  imgElement.alt = name;

  const downloadButton = document.createElement("button");
  downloadButton.textContent = "Download";
  downloadButton.addEventListener("click", () => {
    const a = document.createElement("a");
    a.href = src;
    a.download = name;
    a.click();
  });

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.addEventListener("click", () => {
    imgContainer.remove();
    const images = JSON.parse(localStorage.getItem("images")) || [];
    const updatedImages = images.filter((image) => image.src !== src);
    localStorage.setItem("images", JSON.stringify(updatedImages));
  });

  imgContainer.appendChild(imgElement);
  imgContainer.appendChild(downloadButton);
  imgContainer.appendChild(deleteButton);
  gallery.appendChild(imgContainer);
}