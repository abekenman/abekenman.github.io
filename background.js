browser.runtime.onMessage = () => {
  browser.tabs.create({
    windowId: 2
  });
}
