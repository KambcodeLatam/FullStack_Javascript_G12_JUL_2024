import fs from 'fs/promises'

const path = './data.json'

// Funcion para Asegurarnos que el archivo exista
const checkFileExists = async () => {
    try {
        await fs.access(path)
    } catch (error) {
        await fs.writeFile(path, JSON.stringify([]))
    } 
}

// Funcion para leer el archivo
const readData = async () =>{
    await checkFileExists()
    const data = await fs.readFile(path, 'utf8')
    return JSON.parse(data)

}

// Funcion para escribir el archivo
const writeData = async (data) => {
    await fs.writeFile(path, JSON.stringify(data))

}

// CRUD 

// 1. Crear un elemento
const createItem = async(item) => {
    const data = await readData()
    item.id = Date.now().toString()
    data.push(item)
    await writeData(data)
    console.log(`Elemento creado con ID: ${item.id}`)
}
// 2. Leer un elemento

const readItems = async () => {
    return await readData()
}

// 3. Actualizar un elemento
const update = async (id, newData) => {
    const data = await readData()
    const index = data.findIndex(item => item.id === id)
    if(index === -1){
        console.log(`Elemento con ID ${id} no encontrado`)
        return
    }
    data[index] = { ...data[index], ...newData }
    await writeData(data)
    console.log(`Elemento actualizado con ID: ${id}`)
}

// 4. Eliminar un elemento

const deleteItem = async (id) => {
    const data = await readData()
    const newData = data.filter(item => item.id !== id)
    if(newData.length === data.length){
        console.log(`Elemento con ID ${id} no encontrado`)
        return
    }
    await writeData(newData)
    console.log(`Elemento eliminado con ID: ${id}`)
}
deleteItem("1737423783385")






