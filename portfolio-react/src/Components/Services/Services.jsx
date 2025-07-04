import React from "react";
import '../Services/Services.css'
import Theme_pattern from '../../assets/theme_pattern.svg'
import Services_Data from '../../assets/services_data'
import arrow_icon from '../../assets/arrow_icon.svg'
const Services =()=>{
    return(
        <>
            <div id="services" className="services">
                <div className="services-title">
                    <h1>My Services</h1>
                    {/* <img src={Theme_pattern}/> */}
                </div>
                <div className="services-container">
                    {Services_Data.map((service,index)=>{
                        return <div key={index} className="services-format">
                            <h3>{service.s_no}</h3>
                            <h2>{service.s_name}</h2>
                            <p>{service.s_desc}</p>
                            <div className="services-readmode">
                                <p>Read More</p>
                                <img src={arrow_icon} alt="" />
                            </div>
                        </div>
                    })}
                </div>
            </div>
        </>
    )
}
export default Services;