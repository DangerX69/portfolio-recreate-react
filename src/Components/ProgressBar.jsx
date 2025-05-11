

const ProgressBar = ({skills}) => {

  const len = skills.length
  console.log(len)

  return (
<ul>
	{skills.map((skill) => (
		<li key={skill.key} className="w-full">
			<span>{skill.skill}</span>
			<div className="bg-amber-200 block">{skill.progress}%</div>
		</li>
	))}
</ul>
  )
}

export default ProgressBar
