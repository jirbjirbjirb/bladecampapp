import { Dispatch, SetStateAction, useEffect, useRef } from 'react'
import { useDetectClickOutside } from 'react-detect-click-outside'

export function DistrictInfo({
  districtData,
  setShowModal,
  showModal,
  modalData,
  hydrateModal,
}: DistrictInfoProps) {
  const landmarksRef = useRef<HTMLDivElement>(null)

  const ref = useDetectClickOutside({
    onTriggered: (e) => handleClickOutside(e),
  })

  useEffect(() => {
    if (landmarksRef.current) {
      landmarksRef.current.scrollTo(0, 0)
    }
  }, [districtData.districtName])

  const handleClickOutside = (e: any) => {
    if (!e?.target.className.includes('modal-link')) {
      if (setShowModal) setShowModal(false)
    }
  }

  return (
    <div className="text-log-wrapper">
      <div className="district-wrapper">
        <div className="district-name">
          <h2>{districtData.districtName}</h2>
        </div>
        <div className="text-content">{districtData.textContent}</div>
      </div>
      <div className="landmarks-wrap">
        <div className="landmark-head">
          <u>Landmarks:</u>
        </div>
        <div className="landmarks scroll-wrap" ref={landmarksRef}>
          {districtData.landmarks?.map((landmark, i) => {
            return (
              <div className="landmark-wrapper" key={i}>
                <div className="landmark-name">
                  <h3>{landmark.name}</h3>
                </div>
                <div
                  className="control-text"
                  ref={ref}
                  onClick={
                    hydrateModal
                      ? () => hydrateModal(landmark.affiliation)
                      : () => null
                  }
                >
                  affiliation:{' '}
                  <u className="cursor modal-link">{landmark.affiliation}</u>
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
    </div>
  )
}

export type DistrictInfoProps = {
  districtData: DistrictKeyInfo
  showModal?: boolean
  setShowModal?: Dispatch<SetStateAction<boolean>>
  modalData?: Faction
  setModalData?: Dispatch<SetStateAction<Faction>>
  hydrateModal?: (affiliation: string) => void
}

export type DistrictKeyInfo = {
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
    | "Prospector's League"
  hold: number
}

export type Factions = Faction[]

export type Faction = {
  name: string
  description: string
  tier: number
  hold: 'weak' | 'strong'
}

export type Landmarks = Landmark[]

export type DistrictInfos = DistrictInfoProps[]
