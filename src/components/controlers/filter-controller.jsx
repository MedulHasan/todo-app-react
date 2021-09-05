/* eslint-disable no-unused-expressions */
import PropTypes from 'prop-types';
import React from 'react';
import { Button, ButtonGroup } from 'reactstrap';

const FilterController = ({ handleFilter }) => (
    <ButtonGroup>
        <Button className="" onClick={() => handleFilter('all')}>
            All
        </Button>
        <Button className="" onClick={() => handleFilter('running')}>
            Running
        </Button>
        <Button className="" onClick={() => handleFilter('completed')}>
            Completed
        </Button>
    </ButtonGroup>
);

FilterController.propTypes = {
    handleFilter: PropTypes.func.isRequired,
};
export default FilterController;
