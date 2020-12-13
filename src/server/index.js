import React from 'react'
import { renderToString } from 'react-dom/server'
import Home from '../share/pages'
import app from './http'

function renderHtml(content) {
  return `
    <html>
      <head>
        <title>React SSR</title>
      </head>
      <body>
        <div id="root">${content}</div>
        <script src="/bundle.js"></script>
      </body>
    </html>
  `
}

app.get('/', (req, res) => {
  const content = renderToString(<Home />)

  res.send(renderHtml(content))
})
