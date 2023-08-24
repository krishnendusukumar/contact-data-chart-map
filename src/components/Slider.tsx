import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import chart from "../assets/chart.png"
import map from "../assets/map.png"
import contact_form from "../assets/contact-form.png"
import { Outlet, Link, useNavigate } from "react-router-dom"


const Slider = () => {
    const [visible, setVisible] = useState(false)
    const navigate = useNavigate()

    function handleMapClick() {
        navigate('/map')
        setVisible(false)
    }
    function handleContactClick() {
        navigate('/')
        setVisible(false)
    }
    function handleChartClick() {
        navigate('/chart')
        setVisible(false)
    }

    return (
        <div className='relative w-[50%]'>
            <div className={visible ? "md:relative transition ease-out delay-10000 z-[1000] bg-amber-200 w-28 h-[100vh] " : ""}>
                <FontAwesomeIcon
                    icon={faBars}
                    onClick={() => setVisible(!visible)}
                    className={visible ? 'cursor-pointer absoulte z-[1000] h-8 mt-10 ml-8' : "cursor-pointer absoulte z-[1000] h-8 mt-10 ml-8 text-white"}
                    size='lg'
                />
                <div className={visible ? 'block flex-col mt-48' : "hidden"}>
                    <img src={contact_form} className='cursor-pointer h-10 ml-8 mb-12 text-white' alt="" onClick={() => handleContactClick()} />
                    <img src={chart} className='cursor-pointer h-10 ml-8 mb-12' alt="" onClick={() => handleChartClick()} />
                    <img src={map} className='cursor-pointer h-10 ml-8 mb-12' alt="" onClick={() => handleMapClick()} />
                </div>
            </div>


        </div>
    )
}

export default Slider
