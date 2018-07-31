import React from 'react';
import Modal from 'react-modal';


const OptionModal = (props) => (   ///props to get acces to a external function
   <Modal
   isOpen={!!props.selectedOption}  //double exclamation point to turn a string to true and undefined to false. So when the string is passed by the user the model appears
   onRequestClose={props.handleClearSelectedOption}
   contentLabel="Selected option"
   closeTimeOutMS={200}
   className='modal'
   >
       <h3 className='modal__title' >Selected Option</h3>
       {props.selectedOption && <p className='modal__body' >{props.selectedOption}</p>}
       <button className='button' onClick={props.handleClearSelectedOption}>Okay</button>
    </Modal>
);



export default OptionModal;