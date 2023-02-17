type Props = {
  missionTitle: string
  missionDescription: string
}

export default function Mission({ missionTitle, missionDescription }: Props) {
  return (
    <>
      <div className="mission-card">
        <div className="mission--title">{missionTitle}</div>
        <div className="mission--description">{missionDescription}</div>
      </div>
    </>
  )
}
