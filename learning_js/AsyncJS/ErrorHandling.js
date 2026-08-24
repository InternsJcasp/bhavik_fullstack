// Error Handling: Production Style with Error Handling in Async-Await:
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
