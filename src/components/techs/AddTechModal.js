import React, { useState } from 'react';
import M from "materialize-css/dist/js/materialize.min.js";
import { connect } from "react-redux";
import { addTech } from '../../actions/techActions'
import PropTypes from 'prop-types';

const AddTechModal = ({ addTech }) => {
    const [firstName, setFirstname] = useState('');
    const [lastName, setLastname] = useState('');

    const onSubmit = () => {
        if (firstName === "" || lastName === "") {
            M.toast({ html: 'Please enter firstname and lastname' });
            return;
        }

        const newTech = {
            firstName,
            lastName
        }

        addTech(newTech);
        M.toast({ html: `${firstName} ${lastName} added to technician` })

        document.getElementById('close_T').click();
        setFirstname('');
        setLastname('')

    }
    return (
        <div id='add-tech-modal' className='modal' >
            <div className="modal-content">
                <h4>Enter Technician
                    <i id="close_T" className="material-icons secondary-content modal-close" >close</i>
                </h4>
                <div className="row">
                    <div className="input-field">
                        <input type="text" id="firstname" name="firstname" value={firstName} onChange={e => setFirstname(e.target.value)} />
                        <label htmlFor="firstname" className="active">FirstName</label>
                    </div>
                </div>

                <div className="row">
                    <div className="input-field">
                        <input type="text" id="lastname" name="lastname" value={lastName} onChange={e => setLastname(e.target.value)} />
                        <label htmlFor="lastname" className="active">LastName</label>
                    </div>
                </div>

            </div>

            <div className="modal-footer">
                <a href="#!" onClick={onSubmit} className="waves-effect waves-light btn blue ">Enter</a>
            </div>
        </div>
    )
}

AddTechModal.propTypes = {
    addTech: PropTypes.func.isRequired,
}


export default connect(null, { addTech })(AddTechModal)
