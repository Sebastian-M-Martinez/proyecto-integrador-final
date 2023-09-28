import { Router } from "express";
import { ctrlCreateTask, ctrlDeleteTask, ctrlGetTasks, ctrlUpdateTask} from "../controllers/task.controllers.js";
import { createTaskSchema, editTaskSchema } from "../models/schemas/task_schemas.js";
import { validator } from "../middlewares/validator.js"

const taskRouter = Router();

//RUTA PARA LA VISTA
//taskRouter.get('/tasks', ctrlView)

// endpoint para traer todas las tareas
taskRouter.get('/api/tasks', ctrlGetTasks)

// endpoint para crear una tarea
taskRouter.post('/api/tasks', createTaskSchema, validator, ctrlCreateTask)

// endpoint para modificar una tarea
taskRouter.put('/api/tasks/:id', editTaskSchema, validator, ctrlUpdateTask)

// endpoint para eliminar una tarea
taskRouter.delete('/api/tasks/:id', ctrlDeleteTask)

export { taskRouter }