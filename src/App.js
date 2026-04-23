import './index.css';
import WeatherApp from './Pages/WeatherApp';
import BgImage from './bg-image.png'
function App() {
  
  return( < >

 

  <div style={{backgroundImage: `url(${BgImage})`,}}className='border rounded-2xl w-[300px] h-[500px] bg-blue-400 flex flex-row justify-center mt-16 relative left-[600px]  bg-gradient-to-br from-[#6a11cb] via-[#8e2de2] to-[#ff4e9b]' >
<WeatherApp  />

  </div> </>
  );
  }
export default App;

