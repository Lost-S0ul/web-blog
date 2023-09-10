function openBlog () {
    document.querySelector(".create-blog").classList.remove('hidden')
}

function closeBlog() {
    document.querySelector(".create-blog").classList.add('hidden')
}

document.querySelector("#createBlog").addEventListener("click", openBlog)
document.querySelector("#closeBlog").addEventListener("click", closeBlog)
