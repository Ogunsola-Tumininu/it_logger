import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { getTechs } from '../../actions/techActions'
import PropTypes from 'prop-types'

const TechSelectOptions = ({ getTechs, tech: { techs, loading } }) => {
    useEffect(() => {
        getTechs();
        // eslint-disable-next-line
    }, []);

    return (!loading && techs.length !== 0 &&
        techs.map(tech => <option key={tech.id} value={`${tech.firstName} ${tech.lastName}`}> {tech.firstName} {tech.lastName} </option>)
    )
}

TechSelectOptions.propTypes = {
    getTechs: PropTypes.func.isRequired,
    techs: PropTypes.array,
}

const mapStateToProps = state => ({
    tech: state.tech
})

export default connect(mapStateToProps, { getTechs })(TechSelectOptions)
