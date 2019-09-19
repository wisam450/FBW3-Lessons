const posts = [
    { title: "Post number one", body: " this is the post one " },
    { title: "Post number Two", body: "This is the post two" }

];
function createPost(post) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            posts.push(post);
            let error = false;
            if (!error) {
                resolve(" the new post added to the array!");
            }
            else {
                reject("Sorry : Somthing went wrong");
            }

        }, 2000)

    })
}

function getPosts() {
    setTimeout(function () {
        let output = '';
        posts.forEach(function (item) {
            output += `<li>  ${item.title}    </li>`;

        });
        document.getElementById("output").innerHTML += output;

    }, 1000);
}
createPost({ title: "post three", body: "this is the post three" })
    .then(function(yes){
        console.log(yes);
        getPosts();

    })
    .catch(function (serverError) {
        console.log(serverError);

    })

console.log(posts);