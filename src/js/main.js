document.addEventListener("DOMContentLoaded", () => {
  Fancybox.bind("[data-fancybox]", {
    autoFocus: false,
  });

  const allLinks = document.querySelectorAll('a[href^="#anchor-"]');

  for (let link of allLinks) {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = link.getAttribute("href");
      document.querySelector(targetId).scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  }
});
