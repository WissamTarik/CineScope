
import { Provider } from 'react-redux'
import './App.css'
import Layout from './Layout/Layout'
import { store } from './Libraries/Redux/store';
import AppRouter from './Router/AppRouter';
import  { Toaster } from 'react-hot-toast';
import ErrorBoundary from './Feedback/ErrorBoundary';


function App() {
 

  return (
    <>
    <Provider store={store}>
      <Toaster/>
      <ErrorBoundary/>
   <AppRouter/>
    </Provider>
      
     
    </>
  )
}

export default App
