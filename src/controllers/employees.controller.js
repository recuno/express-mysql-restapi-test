import { pool } from "../db.js"

export const getEmployees = async (req, res) => {
  try {
    // throw new Error ('DB error') // crea mi propio error 
    const [rows] = await pool.query('SELECT * FROM employee')
    res.json(rows)
  } catch (error) { // por lo general se envia un codigo 500, luego se puede revisar los registros del servidor para saver que paso
    return res.status(500).json({
      message: 'Something goes wrong (Algo fue mal)'
    })
  }
}

export const getEmployee = async (req, res) => {
  // console.log(req.params.id) // eq.params guarda en un objeto todos los parametros que vienen de la url
  // res.send('Obteniendo empleado')
  try {
    const [rows] = await pool.query('SELECT * FROM employee WHERE id = ?', req.params.id)
    console.log(rows)
    if (rows.length <= 0) return res.status(404).json({
      message: 'Employee not found'
    })
    res.json(rows[0])
  } catch (error) {
    return res.status(500).json({
      message: 'Something goes wrong (Algo fue mal)'
    })
  }
}


export const createEmployee = async (req, res) => {
  // console.log(req.body) // body se utiliza para ver los datos que el cliente envia al momento que hace la peticion
  const { name, salary } = req.body
  try {
    const [rows] = await pool.query('INSERT INTO employee (name, salary) VALUES (?, ?)', [name, salary])
    res.send({
      id: rows.insertId,
      name,
      salary
    })
  } catch (error) {
    return res.status(500).json({
      message: 'Something goes wrong (Algo fue mal)'
    })
  }
}

export const deleteEmployee = async (req, res) => {
  try {
    const [result] = await pool.query('DELETE FROM employee WHERE id = ?', [req.params.id])
    if (result.affectedRows <= 0) return res.status(404).json({
      message: 'Employee not found'
    })

    res.sendStatus(204) // ESTADO 204 significa que todo va bien

    // console.log(result)
    // res.send('employee deleted')
  } catch (error) {
    return res.status(500).json({
      message: 'Something goes wrong (Algo fue mal)'
    })
  }
}

export const updateEmployee = async (req, res) => {
  // const id = req.params.id
  const { id } = req.params
  const { name, salary } = req.body

  try {
    const [result] = await pool.query('UPDATE employee SET name = IFNULL(?, name), salary = IFNULL(?, salary) WHERE id = ?', [name, salary, id])

    console.log(result)

    if (result.affectedRows === 0) return res.status(404).json({
      message: 'Employee not found'
    })

    const [rows] = await pool.query('SELECT * FROM employee WHERE id = ?', [id])

    // console.log(id, name, salary)
    res.json(rows[0])
  } catch (error) {
    return res.status(500).json({
      message: 'Something goes wrong (Algo fue mal)'
    })
  }
}
