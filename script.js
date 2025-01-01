// // Get the gallery container
// const gallery = document.getElementById("gallery");

// // Generate 1000 photos dynamically
// for (let i = 1; i <= 1000; i++) {
//   const imgElement = document.createElement("img");
  
//   // Use placeholder images from Lorem Picsum
//   imgElement.src = `https://picsum.photos/200?random=${i}`;
//   imgElement.alt = `Photo ${i}`;
  
//   gallery.appendChild(imgElement);
// }

// Get the gallery container




const gallery = document.getElementById("gallery");
const fileInput = document.getElementById("fileInput");
const uploadButton = document.getElementById("uploadButton");

// Handle file upload
uploadButton.addEventListener("click", () => {
  const files = fileInput.files;
  for (const file of files) {
    const reader = new FileReader();
    reader.onload = (e) => {
      const imgElement = document.createElement("img");
      imgElement.src = e.target.result;
      imgElement.alt = file.name;
      gallery.appendChild(imgElement);
    };
    reader.readAsDataURL(file);
  }
});