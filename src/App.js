
import './App.css';
import { Marker } from "react-simple-maps"
import { ComposableMap, Geographies, Geography ,Line} from "react-simple-maps";
const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

function App() {
  return (
    <>

      <div>
    <ComposableMap>
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies.map(geo => <Geography key={geo.rsmKey} geography={geo} />)
        }
        
      </Geographies>


      <Line
        from={[-10, 71]}
        to={[-74.006, 40.7128]}
        stroke="#FF5533"
        strokeWidth={4}
        strokeLinecap="round"
      />

<Line
        from={[-74.006, 40.7128]}
        to={[-104, 40.7128]}
        stroke="#FF5533"
        strokeWidth={4}
        strokeLinecap="round"
      />

<Line
        from={[-104, 40.7128]}
        to={[10, 21]}
        stroke="#FF5533"
        strokeWidth={4}
        strokeLinecap="round"
      />

<Line
        from={[10, 21]}
        to={[74.006, 2.28]}
        stroke="#FF5533"
        strokeWidth={4}
        strokeLinecap="round"
      />
<Line
        from={[10, 21]}
        to={[4.006, 4.28]}
        stroke="#FF5533"
        strokeWidth={4}
        strokeLinecap="round"
      />
<Line
        from={[74.006, 2.28]}
        to={[79.006, 46.28]}
        stroke="#FF5533"
        strokeWidth={4}
        strokeLinecap="round"
      />



      <Marker coordinates={[-74.006, 40.7128]}>
        <circle r={20} fill="#F53" />
        <text textAnchor="middle"  fill="white">
          Canada
        </text>
        <text textAnchor="middle" x="0" y="1em" font-size="5" fill="white">
          1000
        </text>

      </Marker>
      <Marker coordinates={[-104, 40.7128]}>
        <circle r={20} fill="#F53" />
        <text textAnchor="middle" fill="white">
          USA
        </text>
        <text textAnchor="middle" x="0" y="1em" font-size="5" fill="white">
          2000
        </text>
      </Marker>



      <Marker coordinates={[74.006, 49.28]}>
        <circle r={20} fill="#F53" />
        <text textAnchor="middle" fill="white">
          Peru
        </text>
        <text textAnchor="middle" x="0" y="1em"  fill="white">
          1000
        </text>
      </Marker>

      <Marker coordinates={[4.006, 4.28]}>
        <circle r={20} fill="#F53" />
        <text textAnchor="middle" fill="white">
          Paris
        </text>
        <text textAnchor="middle" x="0" y="1em"  fill="white">
          4000
        </text>
      </Marker><Marker coordinates={[74.006, 2.28]}>
        <circle r={20} fill="#F53" />
        <text textAnchor="middle" fill="white">
         Delhi
        </text>
        <text textAnchor="middle" x="0" y="1em"  fill="white">
          5000
        </text>
      </Marker>
      <Marker coordinates={[-10, 71]} >

        <circle r={20} fill="#F53" />
        <text textAnchor="middle" fill="white">
          Egypt
        </text>
        <text textAnchor="middle" x="0" y="1em"  fill="white">
          1000
        </text>
      </Marker>

      <Marker coordinates={[10, 21]}>
        <circle r={20} fill="#F53" />
        <text textAnchor="middle" fill="white">
          Moscow
        </text>
        <text textAnchor="middle" x="0" y="1em"  fill="white">
          1000
        </text>
      </Marker>
     



      <Marker coordinates={[-55, -20]}>
        <circle r={20} fill="#F53" />
        <text textAnchor="middle" fill="white">
          Indonesia
        </text>
        <text textAnchor="middle" x="0" y="1em"  fill="white">
          75000
        </text>
      </Marker>









    </ComposableMap>
    
  </div>
   
    </>
  );
}

export default App;
