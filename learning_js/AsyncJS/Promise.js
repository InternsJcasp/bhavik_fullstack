// Promise: A promise represents a future value.

// It has 3 States:
// Pending - Not Finished Yet.
// Fulfilled - Completed succesfully with a value
// Rejected - Failed with an Error.

function getUserPromise(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true;
      if (success) {
        resolve({ id: userId, name: "Bhavik" });
      } else {
        reject(new Error("User Not Found"));
      }
    }, 500);
  });
}

// Consuming Promises:

// getUserPromise(10)
//   .then((id, name) => {
//     console.log(id, name);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// Promises Chaining: Chaining lets you sequence async operations cleanly.

function getPostsPromise(userId) {
  return new Promise((resolve) => {
    setTimeout(
      () =>
        resolve([
          { id: 1, title: "Post 1" },
          { id: 2, title: "Post 2" },
        ]),
      500,
    );
  });
}

function getCommentsPromise(postId) {
  return new Promise((resolve) => {
    setTimeout(
      () =>
        resolve([
          { id: 1, text: "Nice!" },
          { id: 2, title: "Nice 2" },
        ]),
      500,
    );
  });
}

getUserPromise(1)
  .then((user) => getPostsPromise(user.id)) // return new promise
  .then((posts) => getCommentsPromise(posts[0].id))
  .then((comments) => {
    console.log("Comments:", comments);
  })
  .catch((err) => {
    console.error("Something failed:", err);
  });
