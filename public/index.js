const catpic = async () => {
    return fetch("https://api.thecatapi.com/v1/images/search")
    .then((res) => {
        return res.json();
    })
    .then((data) => {
        return data[0].url;
    })
}

const kittenTitle = () => {
    // create a new div element
    const newElement = document.createElement("h1");

    // set the h1's id
    newElement.setAttribute("id", "kitten_title");

    // and give it some content
    const newContent = document.createTextNode("Kitten Pic");

    // add the text node to the newly created div
    newElement.appendChild(newContent);

    // add the newly created element and its content into the DOM
    document.body.appendChild(newElement);
}

const kittenImg = async () => {
    console.log(await catpic());
    const randomCat = await catpic();
    // create a new div element
    const imgElement = document.createElement("img");
    const divElement = document.createElement("div");
    divElement.setAttribute("id", "cat_container");
    // set the h1's id
    imgElement.setAttribute("id", "random_cat");
    imgElement.setAttribute("src", randomCat);

    // add the newly created element and its content into the DOM
    divElement.appendChild(imgElement);
    document.body.appendChild(divElement);

}

window.onload = async () => {
    kittenTitle();
    await kittenImg();
}
