import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "App de adopción de mascotas",
            version: "1.0.0",
            description: "Documentación de la API",
        },
        Components:{
            securitySchemes:{
                cookieAuth:{
                    type:"apiKey",
                    in:"cookie",
                    name:"jwt"
                }
            }
        }
    },
    apis: ["./src/docs/*.docs.js"],
};

const specs = swaggerJSDoc(options);
export const swaggerDocs = (app, port) => {
    app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(specs));
    console.log(`Documentación de la API disponible en http://localhost:${port}/api/docs`);
};