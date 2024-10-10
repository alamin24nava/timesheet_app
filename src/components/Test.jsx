import React, { useState ,useRef} from 'react';
import useOutsideClick from "../hooks/useOutsideClick";
const users = [
  'Offsight Manager',
  'John Doe',
  'Pallavi Test Offsight',
  'Fahmida Test',
  'Md Abdullah',
  'Ankit Dhadwal',
  'Ashish Pandit',
  'Test Test',
  'Test Offsight'
];

const MultiSelectDropdown = ({_label}) => {
    const ref = useRef()
    useOutsideClick(ref, () => {
        setIsOpen(false)
    })
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  
  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSelectUser = (user) => {
    if (selectedUsers.includes(user)) {
      setSelectedUsers(selectedUsers.filter((u) => u !== user));
    } else {
      setSelectedUsers([...selectedUsers, user]);
    }
  };

  const handleSelectAll = () => {
    if (selectedUsers.length === users.length) {
      setSelectedUsers([]);
    } else {
      setSelectedUsers(users);
    }
  };

  const filteredUsers = users.filter((user) =>
    user.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div ref={ref} className='w-full dropdown'>
        <label htmlFor="" className='pb-4 block'>{_label}</label>
        <div className={`${isOpen ? "rounded-b-none":""} border border-current py-3 px-4 w-full rounded-md cursor-pointer flex items-center justify-between gap-4`}>
      <div onClick={toggleDropdown} className="dropdown-header truncate w-full">
        {selectedUsers.length > 0 ? selectedUsers.join(', ') : 'Select users...'}
      </div>
      </div>
      {isOpen && (
        <div className="dropdown-body border border-current w-full rounded-md absolute z-50 border-t-0 rounded-t-none">
        <label className="input input-bordered flex items-center gap-2 rounded-none">
            <input onChange={(e) => setSearchQuery(e.target.value)} value={searchQuery} type="text" className="grow" placeholder="Search" />
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="h-4 w-4 opacity-70"> <path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
        </label>
          <div className={`px-3 py-2 hover:bg-slate-100 flex items-center justify-between cursor-pointer`}>
            <label>
              <input
                type="checkbox"
                checked={selectedUsers.length === users.length}
                onChange={handleSelectAll}
              />
              Select All
            </label>
          </div>

          <div className="dropdown-list">
            {filteredUsers.map((user, idx) => (
              <div key={idx} className={`px-3 py-2 hover:bg-slate-100 flex items-center justify-between cursor-pointer`}>
                <label>
                  <input
                    type="checkbox"
                    checked={selectedUsers.includes(user)}
                    onChange={() => handleSelectUser(user)}
                  />
                  {user}
                </label>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MultiSelectDropdown;
