import { Dispatch, SetStateAction, useEffect, useRef } from 'react'

export function DistrictInfo({
  districtData,
  setShowModal,
  showModal,
  modalData,
  hydrateModal,
  modalRef,
}: DistrictInfoProps) {
  const landmarksRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (landmarksRef.current) {
      landmarksRef.current.scrollTo(0, 0)
    }
  }, [districtData.districtName])

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
          <h2>Landmarks</h2>
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
                  ref={modalRef}
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
  modalRef?: React.MutableRefObject<null>
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
    | 'The Flock'
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
