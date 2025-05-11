

const ProgressBar = ({skills}) => {

  const len = skills.length
  console.log(len)

  return (
						<ul className={`border-2 self-center flex-${len-1}/${len} flex-col flex `}>
							<li>1</li>
							<li>2</li>
							<li>3</li>
						</ul>
  )
}

export default ProgressBar
