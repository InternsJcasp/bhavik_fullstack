class BrowserHistory {
  constructor(homepage) {
    this.current = homepage;
    this.backStack = [];
    this.forwardStack = [];
  }

  visit(url) {
    // Current page becomes a page we can go back to.
    this.backStack.push(this.current);

    // Open new page.
    this.current = url;

    // New visit deletes all forward history.
    this.forwardStack = [];
  }

  back(steps) {
    while (steps > 0 && this.backStack.length > 0) {
      // Save current page for possible forward navigation.
      this.forwardStack.push(this.current);

      // Go to the most recent previous page.
      this.current = this.backStack.pop();

      steps--;
    }

    return this.current;
  }

  forward(steps) {
    while (steps > 0 && this.forwardStack.length > 0) {
      // Save current page for possible back navigation.
      this.backStack.push(this.current);

      // Restore the most recent forward page.
      this.current = this.forwardStack.pop();

      steps--;
    }

    return this.current;
  }
}

const browser = new BrowserHistory("google.com");

browser.visit("github.com");
browser.visit("youtube.com");
console.log(browser);
browser.back(1);
console.log(browser);
