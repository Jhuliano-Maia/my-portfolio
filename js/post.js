async function carregarPost() {
  const params = new URLSearchParams(window.location.search);
  const postId = params.get("id");

  if (!postId) {
    document.body.innerHTML = "<h2>Post não encontrado (ID ausente)</h2>";
    return;
  }

  try {
    const doc = await db.collection("posts").doc(postId).get();

    if (!doc.exists) {
      document.body.innerHTML = "<h2>Post não encontrado</h2>";
      return;
    }

    const post = doc.data();

    const postElement = document.createElement("article");
    postElement.classList.add("blog-post");

    postElement.innerHTML = `
      <img src="${post.image_url}" alt="${post.title}">
      <h1>${post.title}</h1>
      <p>${post.content}</p>
    `;

    document.getElementById("post-container").appendChild(postElement);
  } catch (error) {
    console.error("Erro ao carregar post:", error);
    document.body.innerHTML = "<p>Erro ao carregar o post.</p>";
  }
}

document.addEventListener("DOMContentLoaded", carregarPost);
