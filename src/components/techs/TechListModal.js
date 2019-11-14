import React, { useEffect } from 'react';
import { connect } from "react-redux"
import { getTechs } from '../../actions/techActions'
import PropTypes from 'prop-types'
import TechItem from './TechItem';


const TechListModal = ({ tech: { techs, loading }, getTechs }) => {

    useEffect(() => {
        getTechs();
        // eslint-disable-next-line
    }, []);


    return (
        <div id='tech-list-modal' className='modal' >
            <div className="modal-content">
                <h4>Technicians List
                    <i id="close" className="material-icons secondary-content modal-close" >close</i>
                </h4>

                <ul className="collection">
                    {!loading && techs.length === 0 ?
                        (<p className="center">You have not added technicians..</p>) :
                        (techs.map(tech => <TechItem key={tech.id} tech={tech} />))
                    }

                </ul>

            </div>

            {/* <div className="modal-footer">
                <a href="#!" s onClick={onSubmit} className="waves-effect waves-light btn blue ">Enter</a>
            </div> */}
        </div>


    )
}

TechListModal.propTypes = {
    techs: PropTypes.array,
    getTechs: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
    tech: state.tech
})
export default connect(mapStateToProps, { getTechs })(TechListModal)


