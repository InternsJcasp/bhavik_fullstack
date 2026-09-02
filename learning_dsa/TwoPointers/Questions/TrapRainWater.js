/**
 * Trapping Rain Water

 * Problem:

 * Tumhare paas ek array `height` hai.
 * Har index `i` pe ek vertical bar hai jiski height = height[i].
 * Sab bars ki width = 1.
 *
 * Barish hoti hai. Bars ke beech jo “valley” banti hai, usme paani rukta hai.
 * Humein batana hai: total kitne units paani rukega.
 *
 * Idea:
 * ---------
 * Har column (index) `i` ke liye:
 *  - leftMax[i]  = i ke left side (0..i) mein maximum bar height
 *  - rightMax[i] = i ke right side (i..n-1) mein maximum bar height
 *
 * Us column pe paani ki surface ki height:
 *  waterHeight[i] = min(leftMax[i], rightMax[i])
 *
 * Us column pe ruka hua paani:
 *  water[i] = max(0, waterHeight[i] - height[i])
 *           = max(0, min(leftMax[i], rightMax[i]) - height[i])
 *
 * Total trapped water:
 *  totalWater = sum of water[i] for all i
 *
 * Simple Example:
 * ---------------
 * height = [0, 1, 0, 2]
 *
 * Index 0:
 *  leftMax = 0, rightMax = 2
 *  waterHeight = min(0, 2) = 0
 *  water = 0 - 0 = 0
 *
 * Index 1:
 *  leftMax = 1, rightMax = 2
 *  waterHeight = min(1, 2) = 1
 *  water = 1 - 1 = 0
 *
 * Index 2:
 *  leftMax = 1, rightMax = 2
 *  waterHeight = min(1, 2) = 1
 *  water = 1 - 0 = 1   ← yahan 1 unit paani rukega
 *
 * Index 3:
 *  leftMax = 2, rightMax = 2
 *  waterHeight = min(2, 2) = 2
 *  water = 2 - 2 = 0
 *
 * Total water = 1 unit
 *
 * Two-Pointer Optimization (Concept):
 * -----------------------------------
 * Naive approach:
 *  - Har index ke liye leftMax aur rightMax alag se nikalo.
 *  - Time: O(n²) (agar har baar pura scan karo).
 *
 * Two-pointer approach:
 *  - Do pointers: left = 0, right = n - 1
 *  - leftMax = 0, rightMax = 0
 *  - Jab tak left <= right:
 *      - Agar height[left] < height[right]:
 *          - left side process karo:
 *            - leftMax = max(leftMax, height[left])
 *            - water += leftMax - height[left] (agar positive)
 *          - left++
 *      - Else:
 *          - right side process karo:
 *            - rightMax = max(rightMax, height[right])
 *            - water += rightMax - height[right] (agar positive)
 *          - right--
 *
 * Intuition:
 *  - Agar leftMax < rightMax, to left side pe paani decide hota hai mainly by leftMax.
 *  - Agar rightMax < leftMax, to right side pe paani decide hota hai mainly by rightMax.
 *  - Isse hum ek hi pass mein O(n) time mein total paani nikal lete hain.
 *
 * Complexity:
 * -----------
 * Time: O(n)  – single pass with two pointers
 * Space: O(1) – only a few variables (left, right, leftMax, rightMax, water)
 */
