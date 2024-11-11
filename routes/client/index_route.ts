import { Express } from "express"
import { tasksRoute } from "./task_route"
import { usersRoute } from "./user_route";
import { requireAuth } from "../../middlewares/client/user_middleware";

export const RoutesClient = (app: Express) => {
  app.use("/tasks", requireAuth, tasksRoute);
  app.use("/users", usersRoute);
}