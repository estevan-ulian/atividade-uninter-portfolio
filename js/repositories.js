// Script para carregar e renderizar repositórios do meu GitHub
(async function () {
    async function getRepositories() {
        const END_POINT = "https://api.github.com/users/estevan-ulian/repos?per_page=9";
        let info = null;
        let error = null;
        try {
            const response = await fetch(END_POINT, {
                method: "GET",
                cache: "force-cache",
            });
            if (!response.ok) {
                throw new Error("Ocorreu um erro ao carregar os repositórios. Tente novamente mais tarde ou atualize a página.");
            }
            const data = await response.json();
            info = data;
        } catch (err) {
            error = err;
        } finally {
        }
        return { info, error };
    }

    const repositories = await getRepositories();

    const githubReposList = document.querySelector("#github_repos");

    if (repositories.error) {
        const errorMessage = document.createElement("p");
        errorMessage.textContent = repositories.error.message;
        errorMessage.classList.add("error");
        githubReposList.appendChild(errorMessage);
        return;
    }

    repositories.info.forEach((repository) => {
        const item = document.createElement("li");
        const title = document.createElement("h3");
        const description = document.createElement("p");
        const linkRepo = document.createElement("a");
        const linkProject = document.createElement("a");
        const wrapperLinks = document.createElement("div");

        title.textContent = repository.name;
        description.textContent = repository.description || "Sem descrição";
        description.classList.add("description");
        linkRepo.textContent = "Repositório";
        linkRepo.href = repository.html_url;
        linkRepo.target = "_blank";
        linkProject.textContent = repository.homepage ? "Acessar site" : null;
        linkProject.href = repository.homepage;
        linkProject.target = "_blank";

        wrapperLinks.appendChild(linkRepo);
        wrapperLinks.appendChild(linkProject);
        wrapperLinks.classList.add("list-wrapper-links");

        item.classList.add("list-item");
        item.appendChild(title);
        item.appendChild(description);
        item.appendChild(wrapperLinks);
        githubReposList.appendChild(item);
    });
})();
