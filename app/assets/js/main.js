document.addEventListener("DOMContentLoaded", () => {
  const allLinks = document.querySelectorAll('a[href^="#"]');

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
