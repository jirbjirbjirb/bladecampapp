import { useEffect, useState } from 'react'
import './App.css'
import {
  DistrictInfo,
  DistrictInfoProps,
  DistrictInfos,
  DistrictKeyInfo,
  Faction,
} from './components/DistrictInfo'
import { crosswaterInfo, crestHillInfo, silversGulchInfo } from './DistrictData'
import {
  Apostles,
  ProspectorsLeague,
  RedHand,
  SplitFingers,
  Unknown,
  Wetherbilt,
} from './FactionData'

const infoPackage: DistrictInfoProps[] = [
  {
    districtData: crosswaterInfo,
  },
  {
    districtData: crestHillInfo,
  },
  {
    districtData: silversGulchInfo,
  },
]

const allFactionInfo = [
  RedHand,
  Apostles,
  Unknown,
  Wetherbilt,
  SplitFingers,
  ProspectorsLeague,
]

function App() {
  const [activeDistrictName, setActiveDistrictName] =
    useState<string>('Crosswater')

  const [showModal, setShowModal] = useState<boolean>(false)
  const [modalData, setModalData] = useState<Faction>(RedHand)

  const selectedDistrict = infoPackage.find(
    (district) => district.districtData.districtName === activeDistrictName
  )!

  const hydrateModal = (affiliation: string) => {
    console.log(`hydrating ${affiliation}`)
    const modal = document.querySelector('.modal')
    if (modal) {
      const factionData = allFactionInfo.find(
        (faction) => faction.name.toLowerCase() === affiliation.toLowerCase()
      )
      console.log({ factionData })
      if (factionData) {
        setModalData(factionData)
      }
      setShowModal(true)
      console.log(showModal)
    }
  }

  useEffect(() => {
    console.log(showModal)
  }, [showModal])

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
                  onClick={() =>
                    setActiveDistrictName(district.districtData.districtName)
                  }
                  style={{
                    opacity:
                      district.districtData.districtName === activeDistrictName
                        ? 0.3
                        : 1,
                    pointerEvents:
                      district.districtData.districtName === activeDistrictName
                        ? 'none'
                        : 'auto',
                  }}
                >
                  {district.districtData.districtName}
                </button>
              )
            })}
          </div>
          <div className="menu-wrapper scroll-wrap">
            <strong>Factions:</strong>
            {allFactionInfo.map((faction, i) =>
              faction.name !== 'Unknown' ? (
                <div
                  className="faction-names modal-link"
                  onClick={() => hydrateModal(faction.name)}
                >
                  {' '}
                  <u className="cursor modal-link"> {faction.name} </u>
                </div>
              ) : null
            )}
          </div>
        </div>
        <div className="main-content">
          <div className="text-log section-bumper">
            {/* this should accept an array of all district data and just render the appropriate one according to state set in menu bar */}
            <DistrictInfo
              districtData={selectedDistrict.districtData}
              modalData={modalData}
              setModalData={setModalData}
              showModal={showModal}
              setShowModal={setShowModal}
              hydrateModal={hydrateModal}
            />
          </div>
          <div
            className="map section-bumper"
            style={{
              backgroundImage: `url(${selectedDistrict.districtData.map})`,
            }}
          ></div>
        </div>
      </div>
    </div>
  )
}

export default App
