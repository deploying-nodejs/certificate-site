const Path = require('path')
const app = require('express')()

app.post('/fullchain.pem', (req, res) => {
    return res.download(
        Path.join(
            __dirname, 'certs', 'fullchain.pem'
        )
    )
})

app.post('/privkey.pem', (req, res) => {
    return res.download(
        Path.join(
            __dirname, 'certs', 'privkey.pem'
        )
    )
})

app.get('*', (_, res) => {
    return res.sendFile(
        Path.join(__dirname, 'index.html')
    )
})

app.listen(process.env.PORT || 3000, () => {
    console.log('Certificate app run succesfully.')
})
