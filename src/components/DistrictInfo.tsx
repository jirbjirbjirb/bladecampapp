import { useEffect, useRef } from "react"

export function DistrictInfo({
  districtName,
  textContent,
  claims,
}: DistrictInfoProps) {
  const getHoldTally = (hold: number) => {
    let holdTally = ''
    for (let i = 0; i < hold.valueOf(); i++) {
      holdTally = holdTally + 'I'
    }
    return holdTally
  }

  const claimsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
  if(claimsRef.current){
    claimsRef.current.scrollTo( 0, 0 );
  }
  },[districtName])

  return (
    <div className="text-log-wrapper">
      <div className="district-wrapper">
        <div className="district-name">
          <h2>{districtName}</h2>
        </div>
        <div className="text-content">{textContent}</div>
      </div>
      <div className="claims scroll-wrap" ref={claimsRef}>
        {claims?.map((claim, i) => {
          return (
            <div className="claim-wrapper" key={i}>
              <div className="claim-name">
                <h3>{claim.name}</h3> <p>{getHoldTally(claim.hold)}</p>
              </div>
              <div className="control-text">held by: {claim.heldBy}</div>
              <div>
                <p>{claim.textContent}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export type DistrictInfoProps = {
  districtName: string
  textContent: string
  claims?: Claims
  map: string
}

export type Claim = {
  name: string
  textContent: string
  heldBy: Factions
  hold: number
}

export type Factions =
  | 'Apostles of Luton'
  | 'Split Finger Gang'
  | 'Red Hand'
  | 'Unknown/Unclaimed'
  | 'Wetherbilt Company'

export type Claims = Claim[]

export type DistrictInfos = DistrictInfoProps[]
