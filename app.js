const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../template/views')
const partialsPath = path.join(__dirname, '../template/partials')

app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

app.use(express.static(publicDirectoryPath))

app.get("", (req, res) => {
  res.render("index", {
    title: "ExpressApp",
    name: "MyName",
  })
})

app.get("/about", (req, res) => {
    res.render('about', {
        title: 'Aboutme',
        name: 'MyName',
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        helpText: 'this is some Helpful Text',
        title: 'Help',
        name: 'MyName',
    })
})

app.listen(3000, () => {
    console.log('Server started on port 3000')
})
app.get('/ExpressApp', (req, res) => {
    res.send({
        forecast: 'it is snowing',
        location: 'London'
    })
})
app.get('/help/*', (req, res) => {
    res.render('404',{
    title:'404',
    name: 'MyName',
    errorMessage: 'Help Article Not Found'

    })
})
app.get('*', (req, res) => {
    res.render('404',{
    title:'404',
    name: 'MyName',
    errorMessage: 'Page Not Found'
    })
})
