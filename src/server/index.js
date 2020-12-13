import app from './http'

app.get('/', (req, res) => {
  res.send('hello world!')
})
