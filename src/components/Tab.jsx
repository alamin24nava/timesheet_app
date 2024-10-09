import { useState } from "react"

const Tab = ({_tabHeaders})=>{
    const [activeTab, setActiveTab] = useState(0)
    const handleTabHeader = (index)=>{
        setActiveTab(index)
    }
    return(
        <div role="tablist" className="tabs tabs-boxed">
            {
                _tabHeaders?.map((item, index)=>
                    <a onClick={()=>handleTabHeader(index)} key={index} role="tab" className={`tab ${activeTab === index ? 'tab-active':''}`}>{item}</a>                    
                )
            }
        </div>
    )
}
export default Tab