// import AgeGroup from './components/RainfallBarChart/AgeGroup';
// import ComposedChart from './components/RainfallBarChart/ComposedChart';
// import RainfallAreaChart from './components/RainfallBarChart/RainfallAreaChart';
// import RainfallBarChart from './components/RainfallBarChart/RainfallBarChart';
// import TemperatureLineChart from './components/RainfallBarChart/TemperatureLineChart';
// import SortingVisualizer from './components/sortingVisualizer/SortingVisualizer';
import Homepage from './Pages/Homepage/Homepage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LineCharts from './Pages/Charts/LineCharts/LineCharts';
import AreaCharts from './Pages/Charts/AreaCharts/AreaCharts';
import BarCharts from './Pages/Charts/BarCharts/BarCharts';
import ComposedCharts from './Pages/Charts/ComposedCharts/ComposedCharts';
import PieCharts from './Pages/Charts/PieCharts/PieCharts';
import RadarCharts from './Pages/Charts/RadarCharts/RadarCharts';
import ScatterCharts from './Pages/Charts/ScatterCharts/ScatterCharts';
import TreeMaps from './Pages/Charts/TreeMaps/TreeMaps';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={ <Homepage />} exact />
          <Route path="/line-charts" element={<LineCharts />} />
          <Route path="/area-charts" element={<AreaCharts />} />
          <Route path="/bar-charts" element={ <BarCharts />} exact />
          <Route path="/composed-charts" element={ <ComposedCharts />} exact />
          <Route path="/pie-charts" element={ <PieCharts />} exact />
          <Route path="/radar-charts" element={ <RadarCharts />} exact />
          <Route path="/scatter-charts" element={ <ScatterCharts />} exact />
          <Route path="/tree-maps" element={ <TreeMaps />} exact />

        </Routes>
      </Router>
    </div>
  );
}

export default App;