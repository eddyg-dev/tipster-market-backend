import swaggerJsdoc from "swagger-jsdoc";

const options: swaggerJsdoc.Options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Tipster Market API",
      version: "1.0.0",
      description: "API pour la gestion des paris sportifs et des cotes",
    },
    servers: [
      {
        url: "http://localhost:3000",
        description: "Serveur de développement",
      },
    ],
    tags: [
      {
        name: "Tipsters",
        description: "Gestion des tipsters",
      },
      {
        name: "Profiles",
        description: "Gestion des profils",
      },
      {
        name: "Tips",
        description: "Gestion des tips",
      },
      {
        name: "Odds",
        description: "Gestion des cotes",
      },
      {
        name: "Matches",
        description: "Gestion des matchs",
      },
      {
        name: "Users",
        description: "Gestion des utilisateurs",
      },
      {
        name: "Bookmakers",
        description: "Gestion des bookmakers",
      },
    ],
  },
  apis: ["./src/routes/*.ts"], // Chemin vers les fichiers de routes
};

export const swaggerSpec = swaggerJsdoc(options);
