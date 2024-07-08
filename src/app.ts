// import repositoryService from './repository/repository.service'
import app from './services/server'

const dependencies = {
  app
}
type Dependencies = typeof dependencies

class App {
  constructor(readonly dependencies: Dependencies) {
    this.dependencies = dependencies
  }

  async execute(): Promise<void> {
    const { app } = this.dependencies
    app.use('/', (_req, res) => {
      res.send('Hello World')
    })
    app.listen(3030)
    console.log('listening on port 3030')
  }
}

export default new App(dependencies)
