fetch(
  "https://api.storyblok.com/v2/cdn/stories/my-home?version=draft&token=QByTQEQaL8cMuMXr6NQ8eQtt"
)
  .then((res) => res.json())
  .then((data) => {
    const bodyBlocks = data.story.content.body;

    // Find the block with the component name "home-section"
    const homeSection = bodyBlocks.find(
      (block) => block.component === "hero-section"
    );

    if (homeSection) {
      const title = homeSection.title;
      const desc = homeSection.description;

      document.getElementById("title").textContent = title;
      document.getElementById("desc").textContent = desc;
    } else {
      console.warn("hero-section block not found!");
    }
  })
  .catch((error) => {
    console.error("Failed to fetch:", error);
  });
