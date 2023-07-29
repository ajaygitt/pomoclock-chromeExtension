import React, { useEffect, useState } from 'react'
import { TrashIcon, PencilIcon, CheckIcon, PlusIcon, MinusIcon } from '@heroicons/react/24/solid';
import { useTimer } from 'react-timer-hook';

function Timer() {


    const [showListAddModal, setShowListAddModal] = useState(false)
    const [pomodoroCount, setPomodoroCount] = useState(1);
    const [taskFormValues, setTaskFormValues] = useState({
        title: '',
        pomodoroCount: pomodoroCount
    })
    const [taskList, setTaskList] = useState([])


    const time = new Date();
    time.setSeconds(time.getSeconds() + 600); // 10 minutes timer
    const [pomodoroClock, setPomodoroClock] = useState({
        isRunning: false,
        time: time,
        intervalId: 0
    })
    const {
        totalSeconds,
        seconds,
        minutes,
        hours,
        days,
        isRunning,
        start,
        pause,
        resume,
        restart,
    } = useTimer({ time, onExpire: () => console.warn('onExpire called') });





    const addNewTask = async () => {
        console.log("called")
        let newTask = {
            title: taskFormValues.title,
            pomodoroCount: pomodoroCount,
            id: taskList.length + 1,
            isCompleted: false,
        }

        setTaskList(prevTaskList => [...prevTaskList, newTask]);
        setShowListAddModal(false)
    }

    useEffect(() => {
        if (taskList.length) {
            localStorage.setItem('taskList', JSON.stringify(taskList));
        }
    }, [taskList]);

    //loading data on component mounting
    useEffect(() => {

        const savedTaskList = JSON.parse(localStorage.getItem('taskList'));
        if (savedTaskList) {
            setTaskList(savedTaskList);
        }
    }, []);

    const removeItem = async (id) => {
        setTaskList(prevTaskList => prevTaskList.filter(task => task.id !== id));
        if (taskList.length == 1) {
            localStorage.setItem('taskList', JSON.stringify([]));

        }
    }
    const adjustPomodoroClock = async () => {

        if (!pomodoroClock.isRunning) {
           start();

        }
    }

    return (
        <>
            <div className='flex justify-center items-center pt-5' >
                <div className='timer font-extrabold text-6xl leading-3'>

                    {pomodoroClock.minutes}:{pomodoroClock.seconds === 0 ? "00" : pomodoroClock.seconds}
                </div>

            </div>
            <div className='justify-center items-center flex pt-8'>
                <button className="bg-secondary text-white px-4 py-2 rounded" onClick={() => { adjustPomodoroClock() }}>Start pomodoro</button>

            </div>
            <div id='taskList ' className='pt-6' >

                <ul className="space-y-4">
                    {taskList?.map((item) => {

                        return (<>
                            <li className="flex items-center space-x-4 bg-secondary h-10">
                                <span className="flex-grow pl-3">{item.title}</span>
                                <button
                                    className="text-green-500 focus:outline-none"
                                >
                                    <CheckIcon className="h-5 w-5" />
                                </button>
                                {/* <button
                                    className="text-blue-500 focus:outline-none"
                                >
                                    <PencilIcon className="h-5 w-5" />
                                </button> */}
                                <button
                                    className="text-red-500 focus:outline-none"
                                >
                                    <TrashIcon className="h-5 w-5" onClick={() => { removeItem(item.id) }} />
                                </button>
                            </li>



                        </>)
                    })}


                </ul>

            </div>

            <div className='pt-5 flex justify-center items-center'>

                <PlusIcon className="h-7 w-7" onClick={() => setShowListAddModal(true)} /> <p>add new </p>

            </div>

            <>

                {showListAddModal ? (
                    <>
                        <div
                            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none max-w-xl"
                        >
                            <div className="relative w-auto my-6 mx-auto ">
                                {/*content*/}
                                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                    {/*header*/}
                                    <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                        <h5 className="text-3xl font-semibold">
                                            Add New Task
                                        </h5>
                                        <button
                                            className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                            onClick={() => setShowListAddModal(false)}
                                        >
                                            <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                                ×
                                            </span>
                                        </button>
                                    </div>
                                    {/*body*/}
                                    <div class="relative p-6 flex">
                                        <label class="flex items-center w-full">
                                            <span class="text-sm font-medium text-slate-700 w-auto">Task title : </span>
                                            <input type="text" class="mt-1 ml-3 py-2 w-3/4 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                                                onChange={(e) => {
                                                    setTaskFormValues({ title: e.target.value })
                                                }}

                                            />
                                        </label>
                                    </div>


                                    <div className="relative p-6 flex  ">

                                        <p className='text-base'>Estimated Pomodoros count:  </p>


                                        <div class="flex items-center ml-3">
                                            <button id="minusBtn" class="w-8 h-8 rounded-full bg-blue-500 text-white focus:outline-none mr-2" onClick={() => {
                                                setPomodoroCount(pomodoroCount - 1)
                                            }}><MinusIcon /> </button>
                                            <p class="w-16 text-center border border-gray-300 focus:outline-none ">{pomodoroCount}</p>

                                            {/* <input id="counterInput" type="number"  value={pomodoroCount} /> */}
                                            <button id="plusBtn" class="w-8 h-8 rounded-full bg-blue-500 text-white focus:outline-none ml-2" onClick={() => {
                                                setPomodoroCount(pomodoroCount + 1)
                                            }}><PlusIcon className='w-8 h-8' /> </button>
                                        </div>



                                    </div>
                                    {/*footer*/}
                                    <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                                        <button
                                            className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                            type="button"
                                            onClick={() => setShowListAddModal(false)}
                                        >
                                            Cancel
                                        </button>
                                        <button
                                            className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                            type="button"
                                            onClick={() => addNewTask()}
                                        >
                                            Add task
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                    </>
                ) : null}
            </>

        </>
    )
}

export default Timer