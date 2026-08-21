// Basic Callback: A callback means a function passed into another Function to be called later.

// Simulating an API call with a callback
// function getUser(userId, callback) {
//   setTimeout(() => {
//     const user = { id: userId, name: "Bhavik" };
//     callback(null, user); // (error, result)
//     // callback("Fetching Wrong Data", user); // (error, result)
//   }, 500);
// }

// getUser(1, (err, user) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log("User:", user);
// });

// Callback Hell:

function getUser(userId, cb) {
  setTimeout(() => cb(null, { id: userId, name: "Bhavik" }), 500);
}
function getPosts(userId, cb) {
  setTimeout(() => cb(null, [{ id: 1, title: "Post 1" }]), 500);
}
function getComments(postId, cb) {
  setTimeout(() => cb(null, [{ id: 1, text: "Nice!" }]), 500);
}

// Callback hell
getUser(1, (err, user) => {
  if (err) return console.error(err);

  getPosts(user.id, (err, posts) => {
    if (err) return console.error(err);

    getComments(posts[0].id, (err, comments) => {
      if (err) return console.error(err);

      console.log("Posts:", posts);
      console.log("User:", user);
      console.log("Comments:", comments);
    });
  });
});

// Problems with deeply nested callbacks:

// Hard to read and maintain (pyramid of doom).
// Error handling is repetitive and easy to get wrong.
// Flow is hard to follow; adding steps makes it worse.
// Refactoring is painful.
// In production code, we avoid this by using Promises and async/await.
