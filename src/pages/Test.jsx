const Test = ()=>{
    return(
        <div class="flex flex-col gap-2">
            <label class="m-0 text-gray-500 dark:text-white text-sm">Project:</label>
            <div class="relative min-h-[45px] cursor-pointer rounded-md border border-gray-500 bg-white text-gray-500 dark:border-gray dark:bg-gray-400 dark:text-white h-12 w-64">
                <div class="flex h-full select-none items-center justify-between truncate rounded-md border-none border-gray-500 bg-white dark:border-gray dark:bg-gray-400 dark:text-white dark:shadow-none">
                    <button type="button" class="max-w-[90%] truncate border-none bg-transparent pl-3">Select project</button>
                    <div class="flex h-full flex-col items-start justify-center pl-3 pr-3">
                        <svg
                            stroke="currentColor"
                            fill="currentColor"
                            stroke-width="0"
                            viewBox="0 0 448 512"
                            font-size="14"
                            class="flex-none text-skyblue-700 hover:text-skyblue-550 dark:text-skyblue dark:hover:text-white"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M240.971 130.524l194.343 194.343c9.373 9.373 9.373 24.569 0 33.941l-22.667 22.667c-9.357 9.357-24.522 9.375-33.901.04L224 227.495 69.255 381.516c-9.379 9.335-24.544 9.317-33.901-.04l-22.667-22.667c-9.373-9.373-9.373-24.569 0-33.941L207.03 130.525c9.372-9.373 24.568-9.373 33.941-.001z"
                            ></path>
                        </svg>
                    </div>
                </div>
                <ul class="hide-scrollbar absolute z-50 m-0 mt-[2px] w-full min-w-[250px] list-none overflow-hidden rounded-md border border-gray-500 bg-white p-0 dark:border-gray dark:bg-gray-400">
                    <li
                        class="group relative flex min-h-[40px] items-center overflow-hidden text-ellipsis whitespace-nowrap border-b-[1px] border-b-gray-500 bg-transparent px-2 hover:text-skyblue-550 dark:border-b-gray dark:hover:bg-gray-400 dark:hover:text-inherit"
                    >
                        <input
                            type="text"
                            class="flex border border-gray-500 dark:border-gray bg-white text-sm text-gray-500 dark:text-white outline-none transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-1200 dark:placeholder:text-gray-400 disabled:cursor-not-allowed dark:disabled:text-gray-400 disabled:text-gray-400/50 w-full py-1 focus:border-skyblue-550 dark:focus:border-skyblue h-9 rounded-none border-none px-1 focus:border-none dark:bg-gray-400"
                            placeholder="Search..."
                            value=""
                        />
                        <div class="flex-none">
                            <svg
                                stroke="currentColor"
                                fill="currentColor"
                                stroke-width="0"
                                viewBox="0 0 512 512"
                                class="right-[10px] text-xs text-skyblue-700 hover:text-skyblue-550 group-focus-within:text-skyblue-550 dark:text-gray-500 group-focus-within:dark:text-white"
                                height="1em"
                                width="1em"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
                                ></path>
                            </svg>
                        </div>
                    </li>
                    <div class="max-h-[30vh] overflow-y-auto p-1">
                        <li class="group w-full overflow-hidden text-ellipsis whitespace-nowrap rounded-sm bg-transparent p-1.5 text-gray-500 hover:bg-gray-50 dark:text-white dark:hover:bg-white dark:hover:text-black">
                            <span class="flex w-full items-center justify-between"><span class="max-w-[90%] truncate">Creation Project</span></span>
                        </li>
                        <li class="group w-full overflow-hidden text-ellipsis whitespace-nowrap rounded-sm bg-transparent p-1.5 text-gray-500 hover:bg-gray-50 dark:text-white dark:hover:bg-white dark:hover:text-black">
                            <span class="flex w-full items-center justify-between"><span class="max-w-[90%] truncate">Design Project</span></span>
                        </li>
                        <li class="group w-full overflow-hidden text-ellipsis whitespace-nowrap rounded-sm bg-transparent p-1.5 text-gray-500 hover:bg-gray-50 dark:text-white dark:hover:bg-white dark:hover:text-black">
                            <span class="flex w-full items-center justify-between"><span class="max-w-[90%] truncate">Cutting Project</span></span>
                        </li>
                    </div>
                </ul>
            </div>
        </div>
    )
}
export default Test