const planos = [
    {
        nome: "Plano Diário",
        descricao: "Acesso ilimitado por um dia.",
        preco: "R$ 30,00"
    },
    {
        nome: "Plano Mensal",
        descricao: "Acesso ilimitado por 30 dias.",
        preco: "R$ 120,00"
    },
    {
        nome: "Plano Trimestral",
        descricao: "Acesso ilimitado por 90 dias.",
        preco: "R$ 340,00"
    },
    {
        nome: "Plano Anual",
        descricao: "Acesso ilimitado por 12 meses.",
        preco: "R$ 1.300,00"
    }
];

function mostrarPlanos() {
    const plansContainer = document.getElementById("plansContainer");
    plansContainer.innerHTML = ""; // Limpa o conteúdo anterior

    planos.forEach(plano => {
        const planoDiv = document.createElement("div");
        planoDiv.className = "plano"; // Adicione uma classe para estilização
        planoDiv.innerHTML = `
            <h3>${plano.nome}</h3>
            <p>${plano.descricao}</p>
            <p><strong>Preço: ${plano.preco}</strong></p>
        `;
        plansContainer.appendChild(planoDiv);
    });

    // Mostra o botão de minimizar e esconde o de mostrar
    document.getElementById("minimizePlansButton").style.display = "block";
    document.getElementById("showPlansButton").style.display = "none";
}

function minimizarPlanos() {
    const plansContainer = document.getElementById("plansContainer");
    plansContainer.innerHTML = ""; // Limpa os planos exibidos

    // Esconde o botão de minimizar e mostra o de mostrar
    document.getElementById("minimizePlansButton").style.display = "none";
    document.getElementById("showPlansButton").style.display = "block";
}

// Adiciona eventos aos botões
document.getElementById("showPlansButton").addEventListener("click", mostrarPlanos);
document.getElementById("minimizePlansButton").addEventListener("click", minimizarPlanos);
