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
          //   const a = document.getElementsByClassName(
          //     "fs-24px font-weight-bold d-flex align-items-center"
          //   )[1];
          const btn = document.getElementsByClassName(
            "creator-profile__avatar"
          )[0];

          const { pathname } = window.location;

          if (btn && pathname.includes("/u/")) {
            const name = pathname.split("/u/")[1];

            element = btn;
            // clearInterval(interval);
            // @${name}
            btn.innerHTML = `
            <button id="signal" style="
                margin-left: 90px;
                margin-top: 50px;
                color: white;
                background-color: #005BFF;
                border: none;
                border-radius: 5px;
                padding: 6px 12px;
                font-size: 14px;
            ">Signalclout</button> 
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

          const xpath = "//button[text()='View Details']";
          const viewDetails = document.evaluate(
            xpath,
            document,
            null,
            XPathResult.FIRST_ORDERED_NODE_TYPE,
            null
          ).singleNodeValue;

          console.log(profile);
          if (profile) {
            if (profile instanceof HTMLElement) {
              profile.click();
              clearInterval(interval);
            }
            return;
          }

          if (viewDetails) {
            if (viewDetails instanceof HTMLElement) {
              viewDetails.click();
              clearInterval(interval);
            }
            return;
          }
        }, 1000);
      }
    }
  });
});
