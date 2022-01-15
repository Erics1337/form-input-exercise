
import './App.css';
import UserForm from './components/UserForm';
import { UserProvider } from './components/context/UserContext';

function App() {
  return (
    <UserProvider>
      <div className='grid place-items-center h-screen bg-gray-50'>
        <div className='bg-white rounded-lg shadow-md scrollbar-hide p-10'>
          <UserForm />
        </div>
      </div>
    </UserProvider>
  );
}

export default App;
