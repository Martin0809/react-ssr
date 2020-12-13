import { matchRoutes } from 'react-router-config'
import app from './http'
import renderer from './renderer'
import routes from '../share/routes'

app.get('*', async (req, res) => {
  const promise = () => Promise.resolve({ props: {} })
  const getServerSideProps =
    matchRoutes(routes, req.path)[0]?.route?.getServerSideProps || promise

  const { props } = await getServerSideProps()

  res.send(renderer(req, props))
})
