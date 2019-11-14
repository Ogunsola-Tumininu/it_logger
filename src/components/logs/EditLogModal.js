import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";
import { updateLog } from '../../actions/logActions'
import PropTypes from 'prop-types';
import M from "materialize-css/dist/js/materialize.min.js"
import TechSelectOptions from '../techs/TechSelectOptions';

const EditLogModal = ({ updateLog, current }) => {

    const [message, setMessage] = useState('');
    const [attention, setAttention] = useState(false);
    const [tech, setTech] = useState('');

    useEffect(() => {
        if (current) {
            setMessage(current.message);
            setAttention(current.attention);
            setTech(current.tech)
        }
    }, [current])

    const onSubmit = () => {
        if (message === "" || tech === "") {
            M.toast({ html: 'Please enter a message and tech' });
            return;
        }

        const editedLog = {
            id: current.id,
            message,
            attention,
            tech
        }

        updateLog(editedLog);
        document.getElementById('close').click()
        M.toast({ html: 'Log Updated' });


        // Clear fields
        setAttention(false);
        setTech('');
        setMessage('')
    }
    return (
        <div id='edit-log-modal' className='modal' style={modalStyle} >
            <div className="modal-content">
                <h4>Edit System Log
                    <i id="close" className="material-icons secondary-content modal-close" >close</i>
                </h4>
                <div className="row">
                    <div className="input-field">
                        <input type="text" id="message" name="message" value={message} placeholder="Log Message" onChange={e => setMessage(e.target.value)} />
                        {/* <label htmlFor="message" className="active">Log Message</label> */}
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

EditLogModal.proTypes = {
    current: PropTypes.object.isRequired,
    updateLog: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
    current: state.log.current
})

export default connect(mapStateToProps, { updateLog })(EditLogModal)

