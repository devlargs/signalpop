chrome.runtime.sendMessage({}, (response) => {
  const url = (a: string) =>
    `https://www.signalclout.com/profile-analyzer?search=${a}&referrer=signalpop`;
  const redirect = (name: string) => {
    window.open(url(name), "_blank");
  };

  const checkReady = setInterval(() => {
    if (document.readyState === "complete") {
      clearInterval(checkReady);
      const { host } = window.location;

      if (host === "bitclout.com") {
        let element;

        const interval = setInterval(() => {
          const a = document.getElementsByClassName(
            "fs-24px font-weight-bold d-flex align-items-center"
          )[1];

          const { pathname } = window.location;

          if (a && pathname.includes("/u/")) {
            const name = pathname.split("/u/")[1];

            element = a;
            clearInterval(interval);
            a.innerHTML = `@${name} 
            <button id="signal">click</button> 
          `;
            document
              .getElementById("signal")
              .addEventListener("click", () => redirect(name));
          }
        }, 1000);
      }

      if (
        host.includes("signalclout.com") ||
        host.includes("signalclout.vercel.app")
      ) {
        console.log("nice one largs");

        const interval = setInterval(() => {
          const profile = document.querySelector(
            'img[src="/search-signalclout-brand.svg"]'
          );
          console.log(profile);
          if (profile) {
            if (profile instanceof HTMLElement) {
              profile.click();
              clearInterval(interval);
            }
          }
        }, 1000);
      }
    }
  });
});
