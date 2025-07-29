const params = new URLSearchParams(window.location.search);
const slug = params.get("slug") || "my-home"; // fallback to 'my-home' if not provided

fetch(`https://api.storyblok.com/v2/cdn/stories/${slug}?version=draft&token=QByTQEQaL8cMuMXr6NQ8eQtt`)
  .then((res) => res.json())
  .then((data) => {
    const bodyBlocks = data.story.content.body;

    // Find the block with the component name "hero-section"
    const heroSection = bodyBlocks.find(
      (block) => block.component === "hero-section"
    );

    if (heroSection) {
      const title = heroSection.title;
      const desc = heroSection.description;

      document.getElementById("title").textContent = title;
      document.getElementById("desc").textContent = desc;
    } else {
      console.warn("hero-section block not found!");
    }
  })
  .catch((error) => {
    console.error("Failed to fetch:", error);
  });
