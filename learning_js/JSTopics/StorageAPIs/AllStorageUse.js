// ==========================================
// 1. COOKIES (Auth Token handling)
// ==========================================
const handleCookieSave = () => {
  const token =
    document.getElementById("cookieInput").value || "secret_token_123";

  // Set Secure Cookie
  document.cookie = `authToken=${encodeURIComponent(token)};
  Path=/;
  Secure;
  SameSite=Strict;
  Max-Age=3600`;
  showCookieData();
};

const showCookieData = () => {
  // Read document.cookie string
  const cookies = document.cookie.split("; ").reduce((acc, curr) => {
    console.log(curr);
    const [key, val] = curr.split("=");
    console.log(decodeURIComponent(val));
    if (key) acc[key] = decodeURIComponent(val || "");
    console.log(acc);
    return acc;
  }, {});

  document.getElementById("cookieOutput").innerText = JSON.stringify(
    cookies,
    null,
    2,
  );
};

// ==========================================
// 2. LOCAL STORAGE (UI Config)
// ==========================================
const handleLSSave = () => {
  const theme = document.getElementById("lsInput").value || "dark";
  const config = { theme: theme, fontSize: "14px" };

  // Always stringify JS Object before saving in LocalStorage
  localStorage.setItem("user_config", JSON.stringify(config));

  showLSData();
};

const showLSData = () => {
  const rawData = localStorage.getItem("user_config");
  const parsedData = rawData ? JSON.parse(rawData) : "No Data";

  document.getElementById("lsOutput").innerText = JSON.stringify(
    parsedData,
    null,
    2,
  );
};

// ==========================================
// 3. SESSION STORAGE (Tab-Specific Drafts)
// ==========================================
const handleSSSave = () => {
  const draftText =
    document.getElementById("ssInput").value || "Tab 1 Draft Text";

  sessionStorage.setItem("form_draft", draftText);

  showSSData();
};

const showSSData = () => {
  const data = sessionStorage.getItem("form_draft") || "No Draft Saved";
  document.getElementById("ssOutput").innerText = data;
};

// ==========================================
// 4. INDEXEDDB (Async Native Database)
// ==========================================
// DB Connection setup (Pure Promise-based Helper Function)
// Step 1: Database Connection Open Karna

const openDB = () => {
  return new Promise((resolve, reject) => {
    // indexedDB.open(dbName, versionNumber)
    const request = indexedDB.open("AppDatabase", 1);

    // Ye event TABHI trigger hota hai jab DB pehli baar bane YA version upgrade ho (e.g., v1 -> v2)
    request.onupgradeneeded = (event) => {
      const db = event.target.result;

      // Check karo agar 'users' name ka object store (table) nahi bana hai
      if (!db.objectStoreNames.contains("users")) {
        // Create Object Store with Primary Key
        // keyPath: 'id' matlab object ka 'id' field primary key hoga
        // autoIncrement: true matlab ID 1, 2, 3... automatic assigned hogi
        db.createObjectStore("users", { keyPath: "id", autoIncrement: true });
      }
    };

    // Connection successfully established
    request.onsuccess = () => resolve(request.result);

    // Connection failed (e.g., storage blocked by user settings)
    request.onerror = () => reject(request.error);
  });
};

const handleIDBSave = async () => {
  const name = document.getElementById("idbInput").value || "Rahul Verma";

  // 1. Connection lao
  const db = await openDB();

  // 2. Transaction start karo
  // Syntax: db.transaction([stores], mode) -> mode can be 'readwrite' or 'readonly'
  const tx = db.transaction("users", "readwrite");

  // 3. Object store ka handle lo
  const store = tx.objectStore("users");

  // 4. Data Save karo (Directly JS Object pass karo!)
  store.add({
    name: name,
    role: "Software Engineer",
    createdAt: new Date().toLocaleTimeString(),
  });

  // 5. Transaction Completion Event Listen Karo
  tx.oncomplete = () => {
    console.log("Transaction committed successfully to disk!");
    showIDBData();
  };

  tx.onerror = (e) =>
    console.error("Transaction Aborted/Failed:", e.target.error);
};

const showIDBData = async () => {
  const db = await openDB();

  // Read operations ke liye 'readonly' mode use karo (faster execution)
  const tx = db.transaction("users", "readonly");
  const store = tx.objectStore("users");

  // Non-blocking Async Request
  const request = store.getAll();

  request.onsuccess = () => {
    // request.result me saare fetched JS Objects ka array milega
    const usersList = request.result;
    document.getElementById("idbOutput").innerText = JSON.stringify(
      usersList,
      null,
      2,
    );
  };
};

// ==========================================
// 5. CACHE API (Network Request/Response Caching)
// ==========================================
const handleCacheSave = async () => {
  if (!("caches" in window)) return alert("Cache API not supported");

  const cache = await caches.open("api-cache-v1");

  // Fake API Response object create karke cache kar rahe hain
  const fakeResponse = new Response(
    JSON.stringify({ user: "Admin", status: "Active" }),
    { headers: { "Content-Type": "application/json" } },
  );

  await cache.put("/api/user-details", fakeResponse);

  showCacheData();
};

const showCacheData = async () => {
  if (!("caches" in window)) return;

  const cache = await caches.open("api-cache-v1");
  const response = await cache.match("/api/user-details");

  if (response) {
    const data = await response.json();
    document.getElementById("cacheOutput").innerText = JSON.stringify(
      data,
      null,
      2,
    );
  }
};

// ==========================================
// APP INITIALIZATION (On Page Load)
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
  showCookieData();
  showLSData();
  showSSData();
  showIDBData();
  showCacheData();
});
