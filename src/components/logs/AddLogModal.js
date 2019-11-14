import React, { useState } from 'react';
import M from "materialize-css/dist/js/materialize.min.js"
import { connect } from "react-redux";
import { addLog } from '../../actions/logActions';
import PropTypes from 'prop-types';
import TechSelectOptions from '../techs/TechSelectOptions';


const AddLogModal = ({ addLog }) => {


    const [message, setMessage] = useState('');
    const [attention, setAttention] = useState(false);
    const [tech, setTech] = useState('');

    const onSubmit = () => {
        if (message === "" || tech === "") {
            M.toast({ html: 'Please enter a message and tech' });
            return;
        }

        const newLog = {
            message,
            attention,
            tech,
            date: new Date()
        }

        addLog(newLog);
        document.getElementById('close_M').click();
        M.toast({ html: 'Log added by' + tech });

        // clear feilds 
        setAttention(false);
        setTech('');
        setMessage('')
    }
    return (
        <div id='add-log-modal' className='modal' style={modalStyle} >
            <div className="modal-content">
                <h4>Enter System Log
                    <i id="close_M" className="material-icons secondary-content modal-close" >close</i>
                </h4>
                <div className="row">
                    <div className="input-field">
                        <input type="text" id="message" name="message" value={message} onChange={e => setMessage(e.target.value)} />
                        <label htmlFor="message" className="active">Log Message</label>
                    </div>
                </div>

                <div className="row">
                    <div className="input-field">
                        <select name="tech" className="browser-default" value={tech} onChange={e => setTech(e.target.value)} >
                            <option value="" disabled>Select Technician </option>
                            <TechSelectOptions />
                        </select>
                    </div>
                </div>

                <div className="row">
                    <div className="input-field">
                        <label>
                            <input type="checkbox" className="filled-in" onChange={e => setAttention(!attention)} checked={attention} value={attention} />
                            <span>Need Attention</span>
                        </label>
                    </div>
                </div>

            </div>

            <div className="modal-footer">
                <a href="#!" onClick={onSubmit} className="waves-effect waves-light btn blue ">Enter</a>
            </div>
        </div>
    )
}

const modalStyle = {
    width: '75%',
};

AddLogModal.propTypes = {
    addLog: PropTypes.func.isRequired,
}


export default connect(null, { addLog })(AddLogModal)


