import { useState } from 'react'
import { useDetectClickOutside } from 'react-detect-click-outside'
import './App.css'
import {
  DistrictInfo,
  DistrictInfoProps,
  Faction,
} from './components/DistrictInfo'
import {
  crosswaterInfo,
  crestHillInfo,
  silversGulchInfo,
  hogsRun,
  theGroveInfo,
} from './DistrictData'
import {
  Apostles,
  Flock,
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
  {
    districtData: hogsRun,
  },
  {
    districtData: theGroveInfo,
  },
]

const allFactionInfo = [
  RedHand,
  Apostles,
  Unknown,
  Wetherbilt,
  SplitFingers,
  ProspectorsLeague,
  Flock,
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
    const modal = document.querySelector('.modal')
    if (modal) {
      const factionData = allFactionInfo.find(
        (faction) => faction.name.toLowerCase() === affiliation.toLowerCase()
      )
      if (factionData) {
        setModalData(factionData)
      }
      setShowModal(true)
    }
  }
  const ref = useDetectClickOutside({
    onTriggered: (e) => handleClickOutside(e),
  })
  const handleClickOutside = (e: any) => {
    if (!e?.target.className.includes('modal-link')) {
      if (setShowModal) setShowModal(false)
    }
  }

  return (
    <div className="App">
      <div
        className="modal"
        ref={ref}
        style={{
          display: showModal ? 'flex' : 'none',
          position: 'absolute',
        }}
        onClick={() => setShowModal(false)}
      >
        <div className="modal-content">
          <div className="modal-toprow">
            <div className="faction-name">{modalData?.name}</div>
            <div
              onClick={setShowModal ? () => setShowModal(false) : () => null}
              className="cursor"
            >
              x
            </div>
          </div>
          <div className="faction-description">{modalData?.description}</div>
          <div className="faction-other-info">
            <div className="faction-tier">Tier: {modalData?.tier}</div>
            <div className="faction-hold">Hold: {modalData?.hold}</div>
          </div>{' '}
        </div>
      </div>
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
            <strong style={{ padding: '0.5rem' }}>Factions:</strong>
            {allFactionInfo
              .sort((a, b) => Number(a.tier) + Number(b.tier))
              .map((faction, i) =>
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
              modalRef={ref}
            />
          </div>
          {/* <div
            className="map section-bumper"
            style={{
              backgroundImage: `url(${selectedDistrict.districtData.map})`,
            }}
          ></div> */}
        </div>
      </div>
    </div>
  )
}

export default App
