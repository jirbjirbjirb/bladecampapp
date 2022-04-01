export function DistrictInfo({
  districtName,
  textContent,
  claims,
}: DistrictInfoProps) {
  return (
    <div className="text-log-wrapper">
      <div className="district-wrapper">
        <div className="district-name">{districtName}</div>
        <div className="text-content">{textContent}</div>
      </div>
      <div className="claims">
        {claims?.map((claim, i) => {
          return (
            <div className="claim-wrapper" key={i}>
              <h3>{claim.name}</h3>
              <p>{claim.textContent}</p>
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
}

export type Claim = {
  name: string
  textContent: string
}
export type Claims = Claim[]

export type DistrictInfos = DistrictInfoProps[]
