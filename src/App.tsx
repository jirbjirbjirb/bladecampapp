import { useState } from 'react'
import './App.css'
import {
  DistrictInfo,
  DistrictInfoProps,
  DistrictInfos,
} from './components/DistrictInfo'

const dummyDistrictInfo: DistrictInfoProps = {
  districtName: 'HELLODISTRICT0',
  textContent:
    'text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text ',
  claims: [
    {
      name: 'firstClaim',
      textContent: 'text text text text text text text text text',
    },
    {
      name: 'secondClaim',
      textContent: 'text text text text text text text text text',
    },
    {
      name: 'thirdClaim',
      textContent: 'text text text text text text text text text',
    },
    {
      name: 'fourthClaim',
      textContent: 'text text text text text text text text text',
    },
  ],
}

const dummyDistrictInfo2: DistrictInfoProps = {
  districtName: 'HELLODISTRICT2',
  textContent:
    'text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text ',
  claims: [
    {
      name: 'firstClaim',
      textContent: 'text text text text text text text text text',
    },
    {
      name: 'secondClaim',
      textContent: 'text text text text text text text text text',
    },
    {
      name: 'thirdClaim',
      textContent: 'text text text text text text text text text',
    },
    {
      name: 'fourthClaim',
      textContent: 'text text text text text text text text text',
    },
  ],
}
const dummyDistrictInfo3: DistrictInfoProps = {
  districtName: 'HELLODISTRICT3',
  textContent:
    'text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text ',
  claims: [
    {
      name: 'firstClaim',
      textContent: 'text text text text text text text text text',
    },
    {
      name: 'secondClaim',
      textContent: 'text text text text text text text text text',
    },
    {
      name: 'thirdClaim',
      textContent: 'text text text text text text text text text',
    },
    {
      name: 'fourthClaim',
      textContent: 'text text text text text text text text text',
    },
  ],
}
const dummyDistrictInfo1: DistrictInfoProps = {
  districtName: 'HELLODISTRICT1',
  textContent:
    'text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text ',
  claims: [
    {
      name: 'firstClaim',
      textContent: 'text text text text text text text text text',
    },
    {
      name: 'secondClaim',
      textContent: 'text text text text text text text text text',
    },
    {
      name: 'thirdClaim',
      textContent: 'text text text text text text text text text',
    },
    {
      name: 'fourthClaim',
      textContent: 'text text text text text text text text text',
    },
  ],
}
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

  // ac
  return (
    <div className="App">
      <div className="app-container">
        <div className="menu-bar">
          {/* 
            take the array of all districts and loop, displaying their names,
            onclick set active state to matching district, triggering change in disctrictinfo component
          */}
          <div className="menu-wrapper">
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
