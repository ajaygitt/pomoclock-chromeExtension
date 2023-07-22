import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="container mx-auto">

<div className="text-center ">
  Pomoclock
</div>


    <div className="grid grid-cols-4 gap-4">
      {/* First column with 25% width */}
      <div className="col-span-1 bg-gray-200 p-4">
     lasses to set the background colors for each column, and the p-4 class to add some padding to the content within each column. Feel free to modify the styles as per your design requirements.In this example, we use the grid-cols-4 class to define a 4-column grid, and then we specify the width of the first column to be 1 column (col-span-1) and the width of the second column to be 3 columns (col-span-3). This way, the first column will take up 25% of the container's width, and the second column will take up 75% of the container's width.
00 and bg-gray-300 classes to set the background colors for each column, and the p-4 class to add some padding to the content within each column. Feel free to modify the styles as per your design requirements.
      </div>

      {/* Second column with 75% width */}
      <div className="col-span-3 bg-gray-300 p-4">
        {/* Your content for the second column goes here */}
        {/* You can replace the classes like 'bg-gray-300 p-4' with your own styles as needed */}
      </div>
    </div>
  </div>
  );
}

export default App;
