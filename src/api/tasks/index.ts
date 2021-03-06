import {Server} from "hapi";

import TaskController from "./task-controller";

export const setRoutes = (server: Server): void => {
    const taskController = new TaskController();

    server.route({
        method: 'GET',
        path: '/tasks',
        options: {
            handler: taskController.getTasks
        }
    });

    server.route({
        method: 'POST',
        path: '/tasks',
        options: {
            handler: taskController.createTask
        }
    });

    server.route({
        method: 'GET',
        path: '/tasks/{id}',
        options: {
            handler: taskController.getTask
        }
    });

    server.route({
        method: 'PATCH',
        path: '/tasks/{id}',
        options: {
            handler: taskController.updateTask
        }
    });

    server.route({
        method: 'DELETE',
        path: '/tasks/{id}',
        options: {
            handler: taskController.deleteTask
        }
    });
};
