(() => {
    const agents = [
        {
            fullName: "Ricardo Diniz",
            designation: "Corretor",
            imageSrc: "img/team-rdm.jpg",
            facebookUrl: "",
            instagramUrl: "",
            linkeInUrl: ""
        },
        {
            fullName: "Winy Soares",
            designation: "Corretor",
            imageSrc: "img/team-winy.jpg",
            facebookUrl: "",
            instagramUrl: "",
            linkeInUrl: ""
        },
        {
            fullName: "Ruan Vieira",
            designation: "Corretor",
            imageSrc: "img/team-ruan.png",
            facebookUrl: "",
            instagramUrl: "",
            linkeInUrl: ""
        },
    ]
    
    const agentsCards = document.querySelector("#com-corretores")
    const agentsCardsList = document.createElement('div')
    agentsCardsList.classList.add('row', 'g-4', 'justify-content-center')
    agentsCards.appendChild(genereteAgentTitle())
    agentsCards.appendChild(agentsCardsList)
    agents.forEach(agent => agentsCardsList.appendChild(generetePropertyAgent(agent)))
    function genereteAgentTitle() {
        const div = document.createElement('div');
        div.classList.add('text-center', 'mx-auto', 'mb-5', 'wow', 'fadeInUp')
        div.setAttribute('data-wow-delay', '0.1s');
        div.style = "max-width: 600px;"
        const h1 = document.createElement('h1');
        h1.classList.add('mb-3')
        h1.innerText = "Corretores"
        const p = document.createElement('p');
        p.innerText = "Nossos corretores são profissionais dedicados, prontos para oferecer suporte e guiar você na escolha do imóvel ideal, tornando o processo de aluguel mais fácil e seguro."
        div.appendChild(h1)
        div.appendChild(p)
        return div
    }
    function generetePropertyAgent(agent) {
        // Criação dos elementos principais
        const colDiv = document.createElement('div');
        colDiv.classList.add('col-lg-3', 'col-md-6', 'wow', 'fadeInUp');
        colDiv.setAttribute('data-wow-delay', '0.1s');
    
        const teamItemDiv = document.createElement('div');
        teamItemDiv.classList.add('team-item', 'rounded', 'overflow-hidden');
    
        const positionRelativeDiv = document.createElement('div');
        positionRelativeDiv.classList.add('position-relative');
    
        // Criar imagem
        const imgElement = document.createElement('img');
        imgElement.classList.add('img-fluid');
        imgElement.src = agent.imageSrc;
        imgElement.alt = agent.fullName;
    
        // Criar div para ícones de redes sociais
        const socialDiv = document.createElement('div');
        socialDiv.classList.add('position-absolute', 'start-50', 'top-100', 'translate-middle', 'd-flex', 'align-items-center');
    
        // Criar links das redes sociais
        const facebookLink = document.createElement('a');
        facebookLink.classList.add('btn', 'btn-square', 'mx-1');
        facebookLink.href = agent.facebookUrl;
        facebookLink.target = '_blank';
        facebookLink.innerHTML = '<i class="fab fa-facebook-f"></i>';
    
        const twitterLink = document.createElement('a');
        twitterLink.classList.add('btn', 'btn-square', 'mx-1');
        twitterLink.href = agent.twitterUrl;
        twitterLink.target = '_blank';
        twitterLink.innerHTML = '<i class="fab fa-twitter"></i>';
    
        const instagramLink = document.createElement('a');
        instagramLink.classList.add('btn', 'btn-square', 'mx-1');
        instagramLink.href = agent.instagramUrl;
        instagramLink.target = '_blank';
        instagramLink.innerHTML = '<i class="fab fa-instagram"></i>';
    
        // Adicionar os links de redes sociais à div de ícones
        socialDiv.appendChild(facebookLink);
        socialDiv.appendChild(twitterLink);
        socialDiv.appendChild(instagramLink);
    
        // Adicionar imagem e socialDiv à div position-relative
        positionRelativeDiv.appendChild(imgElement);
        positionRelativeDiv.appendChild(socialDiv);
    
        // Criar div para o nome e a designação
        const textDiv = document.createElement('div');
        textDiv.classList.add('text-center', 'p-4', 'mt-3');
    
        const nameElement = document.createElement('h5');
        nameElement.classList.add('fw-bold', 'mb-0');
        nameElement.textContent = agent.fullName;
    
        const designationElement = document.createElement('small');
        designationElement.textContent = agent.designation;
    
        // Adicionar nome e designação ao textDiv
        textDiv.appendChild(nameElement);
        textDiv.appendChild(designationElement);
    
        // Adicionar todas as partes ao teamItemDiv
        teamItemDiv.appendChild(positionRelativeDiv);
        teamItemDiv.appendChild(textDiv);
    
        // Adicionar teamItemDiv ao colDiv
        colDiv.appendChild(teamItemDiv);
    
        // Inserir o cartão na página, dentro de um container existente
        return colDiv;
    }
})()