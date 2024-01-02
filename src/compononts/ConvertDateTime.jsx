import React from 'react'

const ConvertDateTime = ({seconds,nanoseconds,text}) => {

const time = seconds*1000 + nanoseconds / 1e6;
const date = new Date (time)

//convert to IST

date.setUTCHours(date.getUTCHours()+12);
date.setUTCMinutes(date.getUTCMinutes()+28);


const formateDate= date.toLocaleString("en-In",{
year:'numeric',
month:'long',
day:'numeric',
hour:'numeric',
minute:'numeric',
second:'numeric',
timeZoneName:'short',

})


  return (
    <>
  <h6>{text} {formateDate}</h6>
    </>
  )
}

export default ConvertDateTime