import React, { useRef } from 'react';
import { connect } from "react-redux"
import { searchLogs } from '../../actions/logActions'

import PropTypes from 'prop-types'

const SearchBar = ({ searchLogs }) => {

    const text = useRef('');

    const onChange = (e) => {
        searchLogs(text.current.value);
    }
    return (
        <nav className="blue" style={{ marginBottom: "30px" }}>
            <div className="nav-wrapper">
                <form>
                    <div className="input-field">
                        <input id="search" type="search" ref={text} onChange={onChange} placeholder="SearchLogs.." required />
                        <label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
                        <i className="material-icons">close</i>
                    </div>
                </form>
            </div>
        </nav>
    )
}

SearchBar.propType = {
    searchLogs: PropTypes.func.isRequired,
}

export default connect(null, { searchLogs })(SearchBar)