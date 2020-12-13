import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import routes from '../share/routes'

export default function renderer(req, props) {
  const INITIAL_PROPS = JSON.stringify(props)
  const content = renderToString(
    <StaticRouter location={req.path}>
      {renderRoutes(routes, props)}
    </StaticRouter>
  )

  return `
    <html>
      <head>
        <title>React SSR</title>
      </head>
      <body>
        <div id="root">${content}</div>
        <script>var INITIAL_PROPS = ${INITIAL_PROPS}</script>
        <script src="/bundle.js"></script>
      </body>
    </html>
  `
}
