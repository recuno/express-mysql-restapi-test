import { config } from 'dotenv'

config()

// console.log(process.env.PORT) // process.env es la forma de leer variables de entorno
// process es objeto global de node 
// env almacena todas las variables que tiene la computadora 
// PORT es una de las variables de la computadora

// console.log(process.env.DB_HOST)
// console.log(process.env.DB_PORT)
// console.log(process.env.DB_USER)
// console.log(process.env.DB_PASSWORD)
// console.log(process.env.DB_DATABASE)

export const PORT = process.env.PORT || 3000
export const DB_HOST = process.env.DB_HOST || localhost
export const DB_PORT = process.env.DB_PORT || 3306
export const DB_USER = process.env.DB_USER || root
export const DB_PASSWORD = process.env.DB_PASSWORD || vacuno
export const DB_DATABASE = process.env.DB_DATABASE || companydb