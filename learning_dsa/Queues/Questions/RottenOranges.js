/**
 * Approach: Rotten Oranges (multi-source BFS)
 *
 * Goal:
 * - Given a grid with 0 (empty), 1 (fresh), 2 (rotten),
 *   find minimum minutes until all fresh oranges become rotten.
 * - If impossible, return -1.
 *
 * Data structure:
 * - Queue for BFS storing (row, col, time).
 *
 * Core idea:
 * - Push all initially rotten oranges into the queue with time = 0.
 * - Run BFS:
 *   - Pop (r, c, t).
 *   - For each 4-directional neighbor:
 *       - If it's fresh (1), mark it rotten (2) and push (nr, nc, t + 1).
 *   - Track the maximum time seen.
 * - After BFS, if any fresh orange (1) remains → return -1.
 * - Else return maxTime.
 *
 * Why BFS/queue works:
 * - Each minute corresponds to one BFS level.
 * - Queue ensures we expand rotting process layer by layer.
 *
 * Time complexity:
 * - O(rows * cols), each cell is processed at most once.
 *
 * Space complexity:
 * - O(rows * cols) in the worst case for the queue.
 */

// function orangesRotting(grid) {
//   const rows = grid.length;
//   const cols = grid[0].length;
//   const queue = [];

//   // Push all initially rotten oranges into the queue
//   for (let r = 0; r < rows; r++) {
//     for (let c = 0; c < cols; c++) {
//       if (grid[r][c] === 2) {
//         queue.push([r, c, 0]);
//       }
//     }
//   }

//   const directions = [
//     [1, 0],
//     [-1, 0],
//     [0, 1],
//     [0, -1],
//   ];

//   let maxTime = 0;

//   while (queue.length > 0) {
//     const [r, c, t] = queue.shift();
//     maxTime = Math.max(maxTime, t);

//     for (const [dr, dc] of directions) {
//       const nr = r + dr;
//       const nc = c + dc;

//       if (nr >= 0 && nr < rows && nc >= 0 && nc < cols && grid[nr][nc] === 1) {
//         grid[nr][nc] = 2; // mark as rotten
//         queue.push([nr, nc, t + 1]);
//       }
//     }
//   }

//   // Check if any fresh orange remains
//   for (let r = 0; r < rows; r++) {
//     for (let c = 0; c < cols; c++) {
//       if (grid[r][c] === 1) {
//         return -1;
//       }
//     }
//   }

//   return maxTime;
// }
