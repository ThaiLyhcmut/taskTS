"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoutesClient = void 0;
const task_route_1 = require("./task_route");
const user_route_1 = require("./user_route");
const user_middleware_1 = require("../../middlewares/client/user_middleware");
const RoutesClient = (app) => {
    app.use("/tasks", user_middleware_1.requireAuth, task_route_1.tasksRoute);
    app.use("/users", user_route_1.usersRoute);
};
exports.RoutesClient = RoutesClient;
