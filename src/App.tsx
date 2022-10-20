import { ThemeProvider } from 'styled-components'
import { defaultTheme } from '../src/styles/theme/default'
import { Router } from './Router'
import { BrowserRouter } from 'react-router-dom'
import { GlobalStyle } from './styles/global'
function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
