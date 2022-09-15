const express = require('express')
const app = express()
let port = '3033'
const path = require('path')
app.use(express.static('./public'))//ahora no hay que usar public en la ruta de los archivos con esta ubicacion 

const testGet = (p, ruta) => {
    app.get(p, (req, res)=>res.sendFile(path.join(__dirname, ruta)))
}

app.post('/login',(req,res)=>{
    res.sendFile(path.join(__dirname,'./views/login.html'))
})

testGet('/', './index.html')
testGet('/carrito', 'views/carrito.html')
testGet('/detalle-producto', 'views/detalle-producto.html')
testGet('/login', 'views/login.html')
testGet('/register', 'views/register.html')








//
app.listen(port, ()=>console.log(`Server listening at por ${port}`))