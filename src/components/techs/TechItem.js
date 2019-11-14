import React from 'react'
import PropTypes from 'prop-types'
import { connect } from "react-redux";
import { deleteTech } from '../../actions/techActions';
import M from "materialize-css/dist/js/materialize.min.js";


const TechItem = ({ tech, deleteTech }) => {
    const { firstName, lastName, id } = tech

    const onClick = () => {
        deleteTech(id);
        M.toast({ html: 'Technician deleted succesfully' });
    }

    return (
        <li className="collection-item">
            <div>
                {firstName} {lastName}
                <i onClick={onClick} style={{ cursor: "pointer" }} className="material-icons secondary-content grey-text" >delete</i>
            </div>
        </li>
    )
}

TechItem.propTypes = {
    tech: PropTypes.object.isRequired,
    deleteTech: PropTypes.func.isRequired,
}

export default connect(null, { deleteTech })(TechItem)

