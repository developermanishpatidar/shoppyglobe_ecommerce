import { login, register } from "../controllers/user.controller.js";

// User routes
export function userRoutes(app){
    app.post('/register' , register);
    app.post('/login' , login);
}