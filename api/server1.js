import express from 'express'

const app = express();
const PORT = 8000;

app.get("/", (req, res, next) => {
    res.json({
        message:"success"
    })
})
app.post("/", (req, res, next) => {
    res.json({
        message:"success"
    })
})
app.delete("/", (req, res, next) => {
    res.json({
        message:"success"
    })
})


app.listen(PORT, (error) => {
    error ? console.log(error) : console.log(`your server running at http://localhost:${PORT}`)
})