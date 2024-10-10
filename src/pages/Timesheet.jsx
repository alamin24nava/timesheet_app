import { useEffect, useState } from "react"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Tab from "../components/Tab"
import { useDispatch, useSelector } from "react-redux"
import { getUserManagement,getProductHours,timesheetUseSelector } from "../features/timesheet/timesheetSlice"
import DropDownMenu from "../components/DropDownMenu";

const Timesheet = ()=>{
    const tabHeaders = ["Product Hours","Zone Hours","User Hours","Logs Approval"]
    const [onchangeValues, setOnchangeValues] = useState({
        byUser:null,
      });
    const [dateRange, setDateRange] = useState([null, null]);
    const [startDate, endDate] = dateRange;
    const dispatch = useDispatch()
    const {users} = useSelector(timesheetUseSelector)
    useEffect(()=>{
        dispatch(getUserManagement())
    },[])
    useEffect(()=>{
        dispatch(getProductHours())
    },[])
    const onChangeByUserDropDown = (selectedItem) => {
        setOnchangeValues((prevState) => ({
          ...prevState,
          byUser: selectedItem,
        }));
      };
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

        <DropDownMenu
            _dropDownItems={users?.data}
            _onHandleChangeDropDown = {onChangeByUserDropDown}
            _selected={onchangeValues.byUser}
            _initSelected = "-- Select User --"
            _isDisabled = {onchangeValues.postedCategory === null ? true : false}
        />
        </>

        
    )
}
export default Timesheet