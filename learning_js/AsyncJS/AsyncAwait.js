// Async-Await: It is a syntax built on top of the Promises to make async code looks synchronous.
// async function loadUserData(userId) {
//   const user = await getUserPromise(userId); // waits for promise
//   const posts = await getPostsPromise(user.id);
//   const comments = await getCommentsPromise(posts[0].id);

//   return { user, posts, comments };
// }

// loadUserData(1)
//   .then((data) => {
//     console.log("All data:", data);
//   })
//   .catch((err) => {
//     console.error("Failed:", err);
//   });

// Rules:
// async function always returns a promise.
// await can only be used inside async functions.
// await pauses that function until the promise resolves or rejects.
// Errors are handled with try/catch.

// Try Catch with Async Await.
async function loadUserDataSafe(userId) {
  try {
    const user = await getUserPromise(userId);
    const posts = await getPostsPromise(user.id);
    const comments = await getCommentsPromise(posts[0].id);
    return { user, posts, comments };
  } catch (err) {
    console.error("Failed to load user data:", err);
    throw err; // rethrow so caller can handle
  }
}
