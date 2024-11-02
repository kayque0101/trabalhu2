// Array de imagens de academias
const imagens = [
    "assets/imagens/th (2).jpg", // Substitua pelos caminhos corretos
    "assets/imagens/th (3).jpg",
    "assets/imagens/th (4).jpg",
    "assets/imagens/th.jpg"
];

// Função para mostrar as imagens na galeria
function mostrarImagens() {
    const gallery = document.getElementById("image-gallery");
    
    imagens.forEach(imagem => {
        const imgElement = document.createElement("img");
        imgElement.src = imagem;
        imgElement.alt = "Imagem de academia"; // Texto alternativo
        gallery.appendChild(imgElement);
    });
}

// Chama a função ao carregar a página
window.onload = mostrarImagens;
