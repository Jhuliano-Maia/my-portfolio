async function carregarProjetos() {
  const container = document.getElementById("projetos-container");

  try {
    const snapshot = await db.collection("projetos").get();

    snapshot.forEach((doc) => {
      const projeto = doc.data();

      const projetoElement = document.createElement("article");
      projetoElement.classList.add("projeto-block");

      projetoElement.innerHTML = `
          <img src="${projeto.image_url}" alt="${projeto.title}">
          <h1>${projeto.title}</h1>
          <div class="links-grid"> 
            <a href="${projeto.link_projeto}">Acesse o Projeto</a>
            <a href="${projeto.link_github}">Acesse no GitHub</a>
          </div>
        `;

      container.appendChild(projetoElement);
    });
  } catch (error) {
    console.error("Erro ao carregar projetos:", error);
    container.innerHTML = "<p>Erro ao carregar os projetos.</p>";
  }
}

document.addEventListener("DOMContentLoaded", carregarProjetos);
