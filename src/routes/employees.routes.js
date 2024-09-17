import { Router } from 'express'
import { getEmployees, createEmployee, updateEmployee, deleteEmployee, getEmployee } from '../controllers/employees.controller.js'

const router = Router()

// GET all Employees
router.get('/employees', getEmployees)

// GET An Employee
router.get('/employees/:id', getEmployee) // :id parametro que se puede extraer desde express

// INSERT An Employee
router.post('/employees', createEmployee)

// UPDATE An Employee
// router.put('/employees/:id', updateEmployee) // PUT actualiza todas las columnas de una fila de la base de datos
router.patch('/employees/:id', updateEmployee) // PATCH actualiza parcialmente una fila de la base de datos

// DELETE An Employee
router.delete('/employees/:id', deleteEmployee)

export default router