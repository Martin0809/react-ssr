import React from 'react'
import { hydrate } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import routes from '../share/routes'

hydrate(
  <BrowserRouter>{renderRoutes(routes, window.INITIAL_PROPS)}</BrowserRouter>,
  document.getElementById('root')
)
