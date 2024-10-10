import useOutsideClick from "../hooks/useOutsideClick";
import { useRef, useState } from "react";
import DelayedSearch from "./DelayedSearch";
const DropDownMenu = ({ _dropDownItems, _onHandleChangeDropDown, _selected, _initSelected,_isDisabled }) => {
    const [open, setOpen] = useState(false)
    const [searchableValue, setSearchableValue] = useState('')
    const ref = useRef()
    useOutsideClick(ref, () => {
        setOpen(false)
    })
    const handleDropDown = ()=>{
        setOpen(!open)
    }
    const handleSelectedMenu = (selectedItem) => {
      _onHandleChangeDropDown(selectedItem);
      setOpen(false)
      
    };
    const handleSearch = (e)=>{
        setSearchableValue(e.target.value)
    }
    let fullName = `${_selected?.firstName} ${_selected?.lastName} `
  return (
    <div ref={ref} className="dropdown w-full relative">
        <div onClick={handleDropDown} disabled = {_isDisabled} className="btn input-bordered w-full bg-transparent justify-start">{fullName || _initSelected}</div>
        <div className={open ? "flex flex-col cursor-pointer border rounded-md absolute z-10 w-full top-12 bg-slate-600":"hidden"}>
            <input onChange={(e)=>handleSearch(e)} type="text" placeholder="Search here..." className="input input-bordered w-full" />
            
            <ul>
                {_dropDownItems?.map((item, index) => 
                    {
                        return (
                            <li onClick={() => handleSelectedMenu(item, index)} key={index} 
                            className={`py-2 px-4 border-b last:border-b-0

                                ${(item.firstName && item.lastName).toLowerCase().includes(searchableValue) ? 'block' : 'hidden'}
                                
                                `}>{item.firstName} {item.lastName}</li>
                        )
                    }
                
            )}
            </ul>
        </div>
    </div>
  );
};
export default DropDownMenu;
