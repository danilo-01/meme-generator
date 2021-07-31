const memeForm = document.querySelector(".meme-form");
const memeContainer = document.querySelector(".memes-container");

// Meme Form
memeForm.addEventListener("submit", (evt) => {
    // Prevent page from reloading on submit
    evt.preventDefault();
    const form = evt.target;

    // Turn form values into variables
    const imageUrl = form["image-url"].value;
    const topText = form["image-top-text"].value;
    const bottomText = form["image-bottom-text"].value;

    // Create meme with form values
    const meme = createMeme(imageUrl,
        topText,
        bottomText);

    // Append meme to meme's container
    memeContainer.appendChild(meme);
    
    // Reset form values
    form["image-url"].value = "";
    form["image-top-text"].value = "";
    form["image-bottom-text"].value = "";
})

const createMeme = (url, topTextInput, bottomTextInput) => {
    // Construct div
    const div = document.createElement("div");
    div.className = "meme";

    // Construct img
    const img = document.createElement("img");
    img.src = url;

    // Construct Text
    // Top Text
    const topText = document.createElement("p");
    topText.className = "top-text";
    topText.appendChild(document.createTextNode(topTextInput.toUpperCase()));

    // Bottom Text
    const bottomText = document.createElement("p");
    bottomText.className = "bottom-text";
    bottomText.appendChild(document.createTextNode(bottomTextInput.toUpperCase()));

    // Combine elements
    div.appendChild(topText);
    div.appendChild(img);
    div.appendChild(bottomText);

    // Return constructed meme
    return div;
}