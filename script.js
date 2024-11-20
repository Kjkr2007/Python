const recipes = [
    {
      title: "Spaghetti Carbonara",
      image: "https://source.unsplash.com/400x300/?pasta",
      description: "A classic Italian pasta dish with eggs, cheese, pancetta, and pepper.",
    },
    {
      title: "Avocado Toast",
      image: "https://source.unsplash.com/400x300/?avocado",
      description: "Healthy and delicious, topped with eggs and spices.",
    },
    {
      title: "Berry Smoothie",
      image: "https://source.unsplash.com/400x300/?smoothie",
      description: "A refreshing mix of berries and yogurt, perfect for breakfast.",
    },
    {
      title: "Grilled Chicken Salad",
      image: "https://source.unsplash.com/400x300/?salad",
      description: "A protein-packed salad with a tangy vinaigrette.",
    },
  ];
  
  const recipeContainer = document.getElementById("recipe-container");
  const modal = document.getElementById("recipe-modal");
  const modalTitle = document.getElementById("modal-title");
  const modalImage = document.getElementById("modal-image");
  const modalDescription = document.getElementById("modal-description");
  const closeModal = document.querySelector(".close-btn");
  
  // Populate Recipe Cards
  recipes.forEach((recipe) => {
    const recipeCard = document.createElement("div");
    recipeCard.classList.add("recipe-card");
  
    recipeCard.innerHTML = `
      <img src="${recipe.image}" alt="${recipe.title}">
      <h3>${recipe.title}</h3>
    `;
  
    recipeCard.addEventListener("click", () => {
      modalTitle.textContent = recipe.title;
      modalImage.src = recipe.image;
      modalDescription.textContent = recipe.description;
      modal.style.display = "flex";
    });
  
    recipeContainer.appendChild(recipeCard);
  });
  
  // Close Modal
  closeModal.addEventListener("click", () => {
    modal.style.display = "none";
  });
  
  // Close Modal on Background Click
  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
  