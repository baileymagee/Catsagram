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
    const newElement = document.createElement("img");

    // set the h1's id
    newElement.setAttribute("id", "random_cat");
    newElement.setAttribute("src", randomCat);

    // add the newly created element and its content into the DOM
    document.body.appendChild(newElement);
}

window.onload = async () => {
    kittenTitle();
    await kittenImg();
}
