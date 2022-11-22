window.onload = () => {
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
