const content = {
  pages: [
    {
      id: 1,
      name: "HTML5",
      link: "#html5",
    },
    {
      id: 2,
      name: "CSS3",
      link: "#css3",
    },
    {
      id: 3,
      name: "JavaScript",
      link: "#javascript",
    },
    {
      id: 4,
      name: "React",
      link: "#react",
    },
    {
      id: 5,
      name: "Redux",
      link: "#redux",
    },
  ],
  brands: [
    {
      id: 1,
      name: "Droga Raia",
      link: "https://www.drogaraia.com.br/",
      image: "logo_drogaraia.png",
    },
    {
      id: 2,
      name: "Drogasil",
      link: "https://www.drogasil.com.br/",
      image: "logo_drogasil.png",
    },
    {
      id: 3,
      name: "Farmasil",
      link: "http://www.farmasil.com.br/",
      image: "logo_farmasil.png",
    },
    {
      id: 4,
      name: "Univers",
      link: "https://univers-pbm.com.br/beneficioMedicamentos/",
      image: "logo_univers.png",
    },
    {
      id: 5,
      name: "4Bio",
      link: "http://www.4bio.com.br/",
      image: "logo_4bio.png",
    },
  ],
  features: [
    {
      id: 1,
      title: "Site Responsivo DESKTOP",
      image: "desktop-responsive-design.png",
      description:
        "Quando pressionado o botão Leia mais... o restante da informação deverá aparecer em scroll down.",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac ipsum vel justo malesuada posuere sed eu leo. Ut tincidunt rutrum porttitor. Maecenas quis eros mi. Aliquam molestie quam in odio iaculis vehicula. Quisque sed efficitur leo. Mauris interdum ut velit eu vestibulum. Aliquam vel ante quis neque pulvinar suscipit. Morbi sed neque egestas dui imperdiet tincidunt quis at dolor. Pellentesque in diam non lorem venenatis volutpat varius pellentesque massa. Integer laoreet ligula eget purus facilisis lobortis.",
      type: "expand",
      color: "#FE9481",
    },
    {
      id: 2,
      title: "Site Responsivo TABLET",
      image: "tablets-responsive-design.png",
      description:
        "Quando pressionado o botão Leia mais... informação deverá aparecer completa em um popup na tela.",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac ipsum vel justo malesuada posuere sed eu leo. Ut tincidunt rutrum porttitor. Maecenas quis eros mi. Aliquam molestie quam in odio iaculis vehicula. Quisque sed efficitur leo. Mauris interdum ut velit eu vestibulum. Aliquam vel ante quis neque pulvinar suscipit. Morbi sed neque egestas dui imperdiet tincidunt quis at dolor. Pellentesque in diam non lorem venenatis volutpat varius pellentesque massa. Integer laoreet ligula eget purus facilisis lobortis.",
      type: "modal",
      color: "#FCDA92",
    },
    {
      id: 3,
      title: "Site Responsivo MOBILE",
      image: "mobile-responsive-design.png",
      description:
        "Quando pressionado o botão alterar tema modifique o tema do site para blackfriday a seu gosto.",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac ipsum vel justo malesuada posuere sed eu leo. Ut tincidunt rutrum porttitor. Maecenas quis eros mi. Aliquam molestie quam in odio iaculis vehicula. Quisque sed efficitur leo. Mauris interdum ut velit eu vestibulum. Aliquam vel ante quis neque pulvinar suscipit. Morbi sed neque egestas dui imperdiet tincidunt quis at dolor. Pellentesque in diam non lorem venenatis volutpat varius pellentesque massa. Integer laoreet ligula eget purus facilisis lobortis.",
      type: "theme",
      color: "#9C8CB9",
    },
  ],
};

// Using CommonJS style export so we can consume via Node (without using Babel-node)
module.exports = {
  content,
};
