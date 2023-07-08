export default async function load_images(links) {
  const promises = links.map(
    (link) =>
      new Promise((resolve, reject) => {
        const img = document.createElement("img");

        img.src = link;

        img.addEventListener("load", () => resolve());

        img.addEventListener("error", () =>
          reject({ message: "image failed to load!" })
        );
      })
  );

  try {
    await Promise.all(promises);

    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}
