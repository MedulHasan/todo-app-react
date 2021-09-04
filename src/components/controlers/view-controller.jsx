import PropTypes from 'prop-types';
import React from 'react';
import { CustomInput, Label } from 'reactstrap';

const ViewController = ({ view, changeView }) => (
    <div className="d-flex">
        <Label for="list-view" className="me-4 d-flex">
            <div className="me-2">
                <CustomInput
                    type="radio"
                    name="view"
                    value="list"
                    id="list-view"
                    onChange={changeView}
                    className="d-inline-block"
                    checked={view === 'list'}
                />
            </div>
            List View
        </Label>
        <Label for="table-view" className="me-4 d-flex">
            <div className="me-2">
                <CustomInput
                    type="radio"
                    name="view"
                    value="table"
                    id="table-view"
                    onChange={changeView}
                    className="d-inline-block"
                    checked={view === 'table'}
                />
            </div>
            Table View
        </Label>
    </div>
);

ViewController.propTypes = {
    view: PropTypes.string.isRequired,
    changeView: PropTypes.func.isRequired,
};

export default ViewController;
