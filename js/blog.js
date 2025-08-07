async function carregarPosts() {
  const container = document.getElementById("post-container");

  try {
    const snapshot = await db.collection("posts").get();

    snapshot.forEach((doc) => {
      const post = doc.data();

      const postElement = document.createElement("article");
      postElement.classList.add("blog-post");

      postElement.innerHTML = `
          <img src="${post.image_url}" alt="${post.title}">
          <h1>${post.title}</h1>
          <p>${post.excerpt}</p>
          <a href="post.html?id=${doc.id}">Leia mais</a>
        `;

      container.appendChild(postElement);
    });
  } catch (error) {
    console.error("Erro ao carregar posts:", error);
    container.innerHTML = "<p>Erro ao carregar os posts.</p>";
  }
}

document.addEventListener("DOMContentLoaded", carregarPosts);
