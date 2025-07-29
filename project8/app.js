document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const slug = params.get("slug") || "my-home";
  const version = params.has("_storyblok") ? "draft" : "published";

  fetch(`https://api.storyblok.com/v2/cdn/stories/${slug}?version=${version}&token=QByTQEQaL8cMuMXr6NQ8eQtt`)
    .then(res => res.json())
    .then(data => {
      const hero = data.story.content.body.find(
        block => block.component === "hero-section"
      );
      if (hero) {
        document.getElementById("title").textContent = hero.title;
        document.getElementById("desc").textContent = hero.description;
      }
    });
});
