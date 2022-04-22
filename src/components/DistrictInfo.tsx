import { useEffect, useRef } from 'react'

export function DistrictInfo({
  districtName,
  textContent,
  landmarks,
}: DistrictInfoProps) {
  const landmarksRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (landmarksRef.current) {
      landmarksRef.current.scrollTo(0, 0)
    }
  }, [districtName])

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
                <div className="control-text">
                  affiliation: {landmark.affiliation}
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
  districtName: string
  textContent: string
  landmarks?: Landmarks
  map: string
  developmentLevel: 'developing' | 'established'
}

export type Landmark = {
  name: string
  textContent: string
  affiliation: Factions
  hold: number
}

export type Factions =
  | 'Apostles of Luton'
  | 'Split Finger Gang'
  | 'Red Hand'
  | 'Unknown'
  | 'Wetherbilt Company'

export type Landmarks = Landmark[]

export type DistrictInfos = DistrictInfoProps[]
