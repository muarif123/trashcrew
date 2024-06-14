import React from 'react'
import { Dropdown } from "flowbite-react";

const Dropo = () => {
  return (
    <div>
        <Dropdown style={{boxShadow:"none"}} className='' label="15 Minutes" dismissOnClick={false}>
      <Dropdown.Item>15 Min</Dropdown.Item>
      <Dropdown.Item>Settings</Dropdown.Item>
      <Dropdown.Item>Earnings</Dropdown.Item>
      <Dropdown.Item>Sign out</Dropdown.Item>
    </Dropdown>

    </div>
  )
}

export default Dropo