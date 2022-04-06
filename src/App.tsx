import { useState } from 'react'
import './App.css'
import { DistrictInfo, DistrictInfos } from './components/DistrictInfo'
import {
  crosswaterInfo,
  crestHillInfo,
  silversGulchInfo,
  testDistrict,
  testDistrict2,
  testDistrict1,
  testDistrict3,
} from './DistrictData'

const infoPackage: DistrictInfos = [
  crosswaterInfo,
  crestHillInfo,
  silversGulchInfo,
  testDistrict,
  testDistrict1,
  testDistrict2,
  testDistrict3,
]

function App() {
  const [activeDistrictName, setActiveDistrictName] =
    useState<string>('Crosswater')

  const selectedDistrict = infoPackage.find(
    (district) => district.districtName === activeDistrictName
  )!

  return (
    <div className="App">
      <div className="app-container">
        <div className="menu-bar">
          <h1>Districts of Creekside</h1>
          <div className="menu-wrapper scroll-wrap">
            {infoPackage.map((district, i) => {
              return (
                <button
                  key={i}
                  onClick={() => setActiveDistrictName(district.districtName)}
                  style={{
                    opacity:
                      district.districtName === activeDistrictName ? 0.3 : 1,
                    pointerEvents:
                      district.districtName === activeDistrictName
                        ? 'none'
                        : 'auto',
                  }}
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
              map={selectedDistrict.map}
            />
          </div>
          <div
            className="map section-bumper"
            style={{ backgroundImage: `url(${selectedDistrict.map})` }}
          ></div>
        </div>
      </div>
    </div>
  )
}

export default App
