import softSkillDetail from "../data/softSkillDetail"


function SoftSkill() {

    return (
        <div className='soft-skill-section'>
            <h1>Why Hire Me?</h1>
            <div className="soft-skill-list">
            {softSkillDetail.map((item, index) => {
                return (
                    <div className="soft-skill-box" key={index}>
                        <div className="soft-skill-icon "> <img className="soft-skill-img" src={item.icon} alt={item.skill}/></div>
                        <p className="soft-skill" >{item.skill}</p>
                        <p className="soft-skill-detail" >{item.detail}</p>
                    </div>
                )
            })}
            </div>

        </div>
    )
}


export default SoftSkill