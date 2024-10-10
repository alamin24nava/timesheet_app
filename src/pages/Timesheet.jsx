import { useEffect, useState } from "react"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Tab from "../components/Tab"
import { useDispatch, useSelector } from "react-redux"
import { getUserManagement,getProductHours,timesheetUseSelector } from "../features/timesheet/timesheetSlice"
import DropDownOption from "../components/DropDownOption";
import MultiSelectDropdown from "../components/Test";

const Timesheet = ()=>{
    const dispatch = useDispatch()
    const tabHeaders = ["Product Hours","Zone Hours","User Hours","Logs Approval"]
    const {users} = useSelector(timesheetUseSelector)
    
    const [dateRange, setDateRange] = useState([null, null]);
    const [selectedOption, setSelectedOption] = useState(null)
    const userNamesArray = users?.data?.map(user => `${user.firstName} ${user.lastName}`);
    
    const [startDate, endDate] = dateRange;
    useEffect(()=>{
        dispatch(getUserManagement())
    },[])

    return(
        <div className="flex flex-col gap-8">
            <Tab _tabHeaders={tabHeaders}/>
            <div className="grid grid-cols-4 gap-4">
                <div className="flex flex-col gap-4 w-full ">
                    <label>Date Range:</label>
                    <DatePicker className="bg-transparent border border-current py-3 px-4 w-full rounded-md cursor-pointer flex items-center justify-between gap-4"
                        onChange={(update) => {
                            setDateRange(update);
                        }}
                        selected={startDate}
                        monthsShown={2}
                        selectsRange={true}
                        startDate={startDate}
                        endDate={endDate}
                        _label = "Date Range:"
                        // isClearable={true}
                        // inline
                    />
                </div>
                <MultiSelectDropdown _label = "Date Range:"/>
                <DropDownOption 
                    _dropDownOptions={userNamesArray}
                    _selectedOption = {selectedOption}
                    _onChange = {setSelectedOption}
                    _multiSelectDropdown = {false}
                    _placeholder="Choose User"
                    _label = "Date Range:"
                />  
                <DropDownOption 
                    _dropDownOptions={userNamesArray}
                    _selectedOption = {selectedOption}
                    _onChange = {setSelectedOption}
                    _placeholder="Choose User"
                    _label = "Product Order:"
                />
            </div>
            {/* <div className="border">
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
            </div> */}        
        </div>

        
    )
}
export default Timesheet