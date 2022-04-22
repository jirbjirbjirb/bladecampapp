import { useEffect, useRef, useState } from 'react'
import { useDetectClickOutside } from 'react-detect-click-outside'
import {
  Apostles,
  RedHand,
  SplitFingers,
  Unknown,
  Wetherbilt,
} from '../FactionData'

const allFactionInfo = [RedHand, Apostles, Unknown, Wetherbilt, SplitFingers]

export function DistrictInfo({
  districtName,
  textContent,
  landmarks,
}: DistrictInfoProps) {
  const landmarksRef = useRef<HTMLDivElement>(null)
  const [showModal, setShowModal] = useState<boolean>(false)
  const [modalData, setModalData] = useState<Faction>()
  const ref = useDetectClickOutside({
    onTriggered: (e) => handleClickOutside(e),
  })

  useEffect(() => {
    if (landmarksRef.current) {
      landmarksRef.current.scrollTo(0, 0)
    }
  }, [districtName])

  const handleClickOutside = (e: any) => {
    console.log(e.target.className)
    if (!e?.target.className.includes('modal-link')) {
      setShowModal(false)
    }
  }

  const hydrateModal = (affiliation: string) => {
    const modal = document.querySelector('.modal')
    if (modal) {
      const factionData = allFactionInfo.find(
        (faction) => faction.name.toLowerCase() === affiliation.toLowerCase()
      )
      if (factionData) {
        setModalData(factionData)
        console.log({ modalData, factionData })
      }
      setShowModal(true)
    }
  }

  return (
    <div className="text-log-wrapper">
      <div className="district-wrapper">
        <div className="district-name">
          <h2>{districtName}</h2>
        </div>
        <div className="text-content">{textContent}</div>
      </div>
      <div className="landmarks-wrap">
        <div className="landmark-head">
          <u>Landmarks:</u>
        </div>
        <div className="landmarks scroll-wrap" ref={landmarksRef}>
          {landmarks?.map((landmark, i) => {
            return (
              <div className="landmark-wrapper" key={i}>
                <div className="landmark-name">
                  <h3>{landmark.name}</h3>
                </div>
                <div
                  className="control-text"
                  ref={ref}
                  onClick={() => hydrateModal(landmark.affiliation)}
                >
                  affiliation: <u className="cursor modal-link">{landmark.affiliation}</u>
                </div>
                <div>
                  <p>{landmark.textContent}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
      <div
        className="modal"
        ref={ref}
        style={{
          display: showModal ? 'block' : 'none',
          position: 'absolute',
        }}
      >
        <div className="modal-content">
          <div className="modal-toprow">
            <div className="faction-name">{modalData?.name}</div>
            <div onClick={() => setShowModal(false)} className="cursor">
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
    </div>
  )
}

export type DistrictInfoProps = {
  districtName: string
  textContent: string
  landmarks?: Landmarks
  map: string
  developmentLevel: 'developing' | 'established'
}

export type Landmark = {
  name: string
  textContent: string
  affiliation:
    | 'Apostles of Luton'
    | 'Split Finger Gang'
    | 'The Red Hand'
    | 'Unknown'
    | 'Wetherbilt Company'
  hold: number
}

export type Factions = Faction[]

export type Faction = {
  name: string
  description: string
  tier: number | 'unknown'
  hold: 'weak' | 'strong'
}

export type Landmarks = Landmark[]

export type DistrictInfos = DistrictInfoProps[]
