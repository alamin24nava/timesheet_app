import useOutsideClick from "../hooks/useOutsideClick";
import { useRef, useState } from "react";
const DropDownMenu = ({ _dropDownItems, _setSelected, _selected }) => {
  // console.log(_selected)
  const [open, setOpen] = useState(false);
  const ref = useRef();
  useOutsideClick(ref, () => {
    setOpen(false);
  });
  const handleDropDown = () => {
    setOpen(!open);
  };
  // const handleSelectedMenu = (selectedItem) => {
  //   _setSelected(selectedItem);
  //   setOpen(false);
  //   // _setSelectedId(selectedItem?.id)
  // };
  const handleSelectedMenu = (selectedItem) => {
    // console.log(selectedItem);
    _setSelected((prevValues) => ({
      [_selected]: selectedItem,
      ...prevValues
    }));
  };
  return (
    <div ref={ref} className="dropdown w-full relative">
      <div
        onClick={handleDropDown}
        className="btn input-bordered w-full bg-transparent"
      >
        ddddd
      </div>
      <ul
        className={
          open ? "flex flex-col cursor-pointer border rounded-md" : "hidden"
        }
      >
        {_dropDownItems?.map((item, index) => (
          <li
            onClick={() => handleSelectedMenu(item)}
            key={index}
            className="p-2 border-b last:border-b-0"
          >
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default DropDownMenu;
