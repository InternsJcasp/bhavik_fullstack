// Navigator provides Information about the Browser and the user's environment.

// Example-1: Browser Language
// console.log(navigator.language); -> en-US(output)

// Example-2: Online Status
// console.log(navigator.onLine); -> returns true/false
// real world use: if(!navigator.onLine){ console.log("You are offline")}

// Example-3: User Agent: It gives information about the browser/environment.
// However, don't rely heavily on user-agent sniffing to determine browser behavior. Feature detection is generally better.
// console.log(navigator.userAgent)

// Example-4: Clipboard
// navigator.clipboard.writeText("Hello Javascript"); // useful for Copy Referral Code or COpy API Key

// Example-5: Online/Offline Event:
// useful for:
// Offline-first apps
// PWA
// Chat applications
// Online editors
// Shopping apps

// window.addEventListener("online", () => {
//   console.log("Internet Connected");
// }); // online
// window.addEventListener("offline", () => {
//   console.log("Internet Disconnected");
// }); // offline

// Example-6: Geolocation:
// navigator.geolocation.getCurrentPosition((position) => {
//   console.log(position.coords.latitude);
//   console.log(position.coords.longitude);
// });

// Example-7: Permissions: Modern browsers also expose:
// navigator.permissions
// for querying certain permission states.
