import express from 'express'
import employeesRoutes from './routes/employees.routes.js'
import indexRoutes from './routes/index.routes.js'

const app = express()
// const port = 3000

// METODO JSON DE EXPRESS
app.use(express.json()) // convierte los datos a un objeto json

app.use(indexRoutes)
app.use('/api', employeesRoutes)

// SI UN USUARIO BUSCA UNA RUTA QUE NO EXISTE
app.use((req, res, next) => res.status(404).json({ // funcion middleware
  message: 'endpoint not found (punto de conexión no encontrado'
}))

export default app