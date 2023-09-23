// add button functional
function openBlog() {
    document.querySelector(".create-blog").classList.remove('hidden')
}

function closeBlog() {
    document.querySelector(".create-blog").classList.add('hidden')
}

document.querySelector("#createBlog").addEventListener("click", openBlog)
document.querySelector("#closeBlog").addEventListener("click", closeBlog)

let posts = [
    {
        "header": "headfder",
       "content": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam delectus libero, repudiandae molestias, esse, nesciunt similique sint pariatur ipsum sed quas quibusdam officia quisquam doloribus iure tenetur tempore labore? Culpa!"
    }
];
let newPost = [
]
// draw all posts
// header, content
function drawPost(post){
    const template = document.getElementById('post-template');
    const instance = template.content.cloneNode(true);
    const postHeader = instance.querySelector('#post-header');
    const postContent = instance.querySelector('#post-content');

    postHeader.innerHTML = post["header"];
    postContent.innerHTML = post["content"];
    
    const pickedLingua = document.getElementById('blogs');
    pickedLingua.appendChild(instance);
}

function drawAllPosts(postArray) {
    for (index = 0; index < postArray.length; index++)
        drawPost(postArray[index])
}

drawAllPosts(posts) 

// add post
function addPost() {
    console.log('yes')
    header = document.querySelector("#header-input").value;
    content = document.querySelector("#content-input").value;
    posts.push({
        "header": header,
        "content": content
    })
}


// add event for button
document.querySelector("#newPost").addEventListener("click", addPost);
