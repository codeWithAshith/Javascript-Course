const posts = [
  { title: "Post One", body: "This is post one" },
  { title: "Post One", body: "This is post one" },
];

const getPosts = () => {
  setTimeout(() => {
    let output = ``;
    posts.forEach((post) => {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
};

// // takes longer than getPosts. Hence create post will be missing
createPost = (post) => {
  setTimeout(() => {
    posts.push(post);
  }, 2000);
};

// getPosts();

// createPost({ title: "Post Three", body: "This is post three" });

// adding callback to fix the issue

// createPost = (post, callback) => {
//   setTimeout(() => {
//     posts.push(post);
//     callback();
//   }, 2000);
// };

// createPost({ title: "Post Three", body: "This is post three" }, getPosts);

// Promises

// const createPost = (post) => {
//   new Promise((resolve, reject) => {
//     setTimeout(() => {
//       posts.push(post);
//       const error = false;
//       if (!error) {
//         resolve();
//       } else {
//         reject("Something went wrong");
//       }
//     }, 2000);
//   });
// };

// createPost({ title: "Post Three", body: "This is post three" })
//   .then(getPosts)
//   .catch((err) => console.log(err));

// Promise all

// const promiseOne = Promise.resolve("Hello World");
// const promiseTwo = 10;
// const promiseThree = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Good Bye");
//   }, 2000);
// });

// Promise.all([promiseOne, promiseTwo, promiseThree]).then((val) =>
//   console.log(val)
// );

// async await

const init = async () => {
  await createPost({ title: "Post Three", body: "This is post three" });
  getPosts();
};

init();
