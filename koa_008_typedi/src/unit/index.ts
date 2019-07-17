import "reflect-metadata"
import { Container } from 'typedi'
import App from './App'


const app: App = Container.get(App)
//app.run()
