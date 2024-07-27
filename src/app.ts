import server from './services/server'

const dependencies = {
  server
}
type Dependencies = typeof dependencies

class App {
  constructor(readonly dependencies: Dependencies) {
    this.dependencies = dependencies
  }

  async execute(): Promise<void> {
    const { server } = this.dependencies
    server.use('/', (_req, res) => {
      res.send('Hello World')
    })
    console.log('listening on port 3030')
  }
}

export default new App(dependencies)
