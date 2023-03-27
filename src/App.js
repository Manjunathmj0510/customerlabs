import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SlidingPanel from 'react-sliding-side-panel';
import './App.css'

const App = () => {
  const [openPanel, setOpenPanel] = useState(false);
  const [schema,setSchema] = useState(['First Name','Account Name'])
  const changeSchema = (e) =>{
    setSchema([...schema,e.target.value])
  }
  return (
    <div>
      <div className='blur-background'></div>
      <div className='header-segment'>
      &#60; View audience
      </div>
      <div className='segment-button'>
        <button className='segment-button-in' onClick={() => setOpenPanel(true)}>SAVE SEGMENT</button>
      </div>
      <SlidingPanel
        type={'right'}
        isOpen={openPanel}
        size={30}
      >
        <div>
        <div className='header-segment-hide'>&#60; Saving segment</div>
         <p>Enter the Name of the Segment</p>
         <input className='segment-input' type='text' placeholder='Name the segment'/> 
         <p style={{fontWeight:600,fontSize:15}}>To save your segment,you need to add the schemas<br/>to build the query</p>
         <div className='dot-container'><div><div className='circle-pink'></div><p className='point-text'>User traits</p></div><div><div className='circle-blue'></div> <p className='point-text'>Group traits</p></div></div>
         <div>
          <div className='segment-container'>
          {schema.map(res=>
          <div className='div-delete'><select className='selected-schema'><option>{res}</option></select><div className='delete-button'><div className='minus-symbol'></div></div></div>
        )}
         </div>
         <select className='selected-schema' onChange={changeSchema}>
          <option>Add schema to segment</option>
          <option value='Last Name'>Last Name</option>
          <option Value='Age'>Age</option>
          <option Value='City'>City</option>
          <option Value='State'>State</option>
          <option Value='Gender'>Gender</option>
          </select><br/>
         <a style={{fontWeight:700,color:'blue',cursor:'pointer'}}>+add new schema</a>
         </div>
        </div>
        <div className='footer'>
         <button className='save-button'>Save segment</button>
         <button className='cancel-button' onClick={() => setOpenPanel(false)}>Cancel</button>
        </div>
      </SlidingPanel>
    </div>
  );
};
 
export default App;