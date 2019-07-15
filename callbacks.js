const posts = [
    { title: 'Post One', body: 'This is post one' },
    { title: 'Post Two', body: 'This is post two' }
];
  
  function getPosts() {
    setTimeout(() => {
      let output = '';
      posts.forEach((post, index) => {
        output += `<li>${post.title}</li>`;
      });
      document.body.innerHTML = output;
    }, 1000);
  }
  
  function createPost(post, callback) {
    setTimeout(() => {
      posts.push(post);
      console.log("post 3 is added!")
      callback();
    }, 1000);
  }
  
function myFun() {
     x=document.getElementById("val").value;
     createPost({ title: `${x}`, body: 'This is post three' }, getPosts);
}
  
  