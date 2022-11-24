// initialize page
//      create and style main container
//      create sub containers/items

// create main content
//      contains title, new pic button, and pic

const initPage = () => {
    // random bg color :3
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = "#" + randomColor;

    const container = document.createElement('section');
    container.className = 'container';
    document.body.appendChild(container);

    createMain();
    createScoreContainer();
    createCommentContainer();
    fetchCat();
}

const createMain = () => {
    // h1
    const h1 = document.createElement('h1');
    h1.innerText = 'Catstagram.meow';

    // pic button
    const newCatButton = document.createElement('button');
    newCatButton.id = 'new_cat_button';
    newCatButton.innerText = 'Genewate new kitten :3'

    // pic
    const catPic = document.createElement('img');
    catPic.id = 'catpic';
    // console.log(fetchCat());

    // append
    const container = document.querySelector('.container');
    container.appendChild(h1);
    container.appendChild(newCatButton);
    container.appendChild(catPic);
}

const createScoreContainer = () => {
    const scoreContainer = document.createElement('div');
    scoreContainer.className = 'score_container';

    const scoreDisplay = document.createElement('div');
    scoreDisplay.className = 'score_display';

    const scoreTitle = document.createElement('span');
    scoreTitle.innerText = 'Kitten Pawpuwawity: '
    const score = document.createElement('span');
    score.className = 'score';
    score.innerText = '0';

    scoreDisplay.appendChild(scoreTitle);
    scoreDisplay.appendChild(score);

    const buttonContainer = document.createElement('div');

    const updootButton = document.createElement('button');
    updootButton.id = 'updoot';
    updootButton.innerText = '↑ Updoot!!! ^w^'
    const downvoteButton = document.createElement('button');
    downvoteButton.id = 'downvote';
    downvoteButton.innerText = '↓ DOWNVOTE!! >:((('

    buttonContainer.appendChild(updootButton);
    buttonContainer.appendChild(downvoteButton);

    scoreContainer.appendChild(scoreDisplay);
    scoreContainer.appendChild(buttonContainer);

    const container = document.querySelector('.container');
    container.appendChild(scoreContainer);
}

const vote = (event) => {
    const scoreRef = parseInt(document.querySelector('.score').innerText);
    if (event.target.id === 'updoot') {
        // increment score
        document.querySelector('.score').innerText = scoreRef + 1;
    } else {
        // decrement score
        document.querySelector('.score').innerText = scoreRef - 1;
    }
}

const createCommentContainer = () => {
    const commentForm = document.createElement('div'); // <--- change 'div' to 'form' when you're ready for Local Storage :)
    commentForm.className = 'comment_form';

    const userCommentContainer = document.createElement('div');
    userCommentContainer.className = 'user_comment_container';

    const label = document.createElement('label');
    label.innerText = "comments: ";

    const commentInput = document.createElement('input');
    commentInput.id = 'user_comment';
    commentInput.placeholder = 'Shawe yowr thoughts :3...';
    commentInput.required = true;

    userCommentContainer.appendChild(label);
    userCommentContainer.appendChild(commentInput);

    // ----| UNCOMMENT THIS ONCE LOCALSTORAGE IS WORKING |----
    // const submitButton = document.createElement('input');
    // submitButton.id = 'submit_button';
    // submitButton.type = 'submit';
    // submitButton.value = 'Submit :)';

    const submitButton = document.createElement('button');
    submitButton.id = 'submit_button';
    submitButton.innerText = 'Submit :)';

    commentForm.appendChild(userCommentContainer);
    commentForm.appendChild(submitButton);

    const comments = document.createElement('div');
    comments.className = 'comments';

    const container = document.querySelector('.container');
    container.appendChild(commentForm);
    container.appendChild(comments);
}

const fetchCat = async () => {
    const catResponse = await fetch("https://api.thecatapi.com/v1/images/search");
    const catData = await catResponse.json();
    const url = catData[0].url;

    document.querySelector('#catpic').src = url;
    document.querySelector('.score').innerText = '0'
}

const submitComment = () => {

}

// const kittenTitle = () => {
//     // create a new div element
//     const newElement = document.createElement("h1");

//     // set the h1's id
//     newElement.setAttribute("id", "kitten_title");

//     // and give it some content
//     const newContent = document.createTextNode("Kitten Pic.meow");

//     // add the text node to the newly created div
//     newElement.appendChild(newContent);

//     // add the newly created element and its content into the DOM
//     document.body.appendChild(newElement);
// }

// const kittenImg = async () => {
//     console.log(await catpic());
//     const randomCat = await catpic();
//     // create a new div element
//     const imgElement = document.createElement("img");
//     const divElement = document.createElement("div");
//     divElement.setAttribute("id", "cat_container");
//     // set the h1's id
//     imgElement.setAttribute("id", "random_cat");
//     imgElement.setAttribute("src", randomCat);

//     // add the newly created element and its content into the DOM
//     divElement.appendChild(imgElement);
//     document.body.appendChild(divElement);
// }

// const newKittenButton = async () => {
//     const newKitten = document.createElement('button');
//     newKitten.setAttribute('id', 'new-pic');
//     newKitten.innerText('Generate New Kitten :3');

// }


window.onload = async () => {
    initPage();

    document.getElementById('new_cat_button').addEventListener('click', fetchCat);
    document.getElementById('updoot').addEventListener('click', e => vote(e));
    document.getElementById('downvote').addEventListener('click', e => vote(e));
    document.getElementById('downvote').addEventListener('click', e => vote(e));
    // kittenTitle();
    // await kittenImg();
    // setBg();
}
