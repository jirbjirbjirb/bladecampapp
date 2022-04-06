import { useState } from 'react'
import './App.css'
import { DistrictInfo, DistrictInfos } from './components/DistrictInfo'
import {
  dummyDistrictInfo,
  dummyDistrictInfo1,
  dummyDistrictInfo2,
  dummyDistrictInfo3,
} from './DistrictData'

const dummyInfoPackage: DistrictInfos = [
  dummyDistrictInfo1,
  dummyDistrictInfo2,
  dummyDistrictInfo3,
  dummyDistrictInfo,
]

function App() {
  const [activeDistrictName, setActiveDistrictName] =
    useState<string>('HELLODISTRICT1')

  const selectedDistrict = dummyInfoPackage.find(
    (district) => district.districtName === activeDistrictName
  )!

  console.log({
    activeDistrictName,
    dummyInfoPackage,
  })

  return (
    <div className="App">
      <div className="app-container">
        <div className="menu-bar">
          <div className="menu-wrapper">
            <h1> DISTRICTS: </h1>
            {dummyInfoPackage.map((district, i) => {
              return (
                <button
                  key={i}
                  onClick={() => setActiveDistrictName(district.districtName)}
                >
                  {district.districtName}
                </button>
              )
            })}
          </div>
        </div>
        <div className="main-content">
          <div className="text-log section-bumper">
            {/* this should accept an array of all district data and just render the appropriate one according to state set in menu bar */}
            <DistrictInfo
              districtName={selectedDistrict?.districtName}
              claims={selectedDistrict?.claims}
              textContent={selectedDistrict.textContent}
            />
          </div>
          <div className="map section-bumper">
            THIS IS WHERE THE MAP GOES
            {/* Stretch goal, toggle between different type of maps, highlight present district on the map, etc. one map per district with district highlighted, rerender with apppropriate asset when state changes */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
