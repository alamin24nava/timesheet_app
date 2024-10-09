import { useEffect, useState } from "react"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Tab from "../components/Tab"
import { useDispatch, useSelector } from "react-redux"
import { getUserManagement,getProductHours,timesheetUseSelector } from "../features/timesheet/timesheetSlice"

const Timesheet = ()=>{
    const tabHeaders = ["Product Hours","Zone Hours","User Hours","Logs Approval"]
    // const [startDate, setStartDate] = useState(new Date())
    const [dateRange, setDateRange] = useState([null, null]);
    const [startDate, endDate] = dateRange;
    const dispatch = useDispatch()
    const {users} = useSelector(timesheetUseSelector)
    useEffect(()=>{
        dispatch(getUserManagement())
    },[])
    useEffect(()=>{
        // dispatch(getProductHours())
    },[])
    return(
        <>
            <Tab _tabHeaders={tabHeaders}/>
            <div className="border">
                <DatePicker
                    onChange={(update) => {
                        setDateRange(update);
                    }}
                    selected={startDate}
                    monthsShown={2}
                    selectsRange={true}
                    startDate={startDate}
                    endDate={endDate}
                    // isClearable={true}
                    // inline
                />
                <div className="datepicker-buttons">
                    <button className="btn-apply">Apply</button>
                    <button className="btn-cancel">Cancel</button>
                </div>
            </div>

            {
                users?.data?.map((user, index)=>
                    <div  key={index} >{user?.username}</div>
                )
            } 
       
        </>

        
    )
}
export default Timesheet