import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

import { deleteRows, addRow, updateRow } from '../redux/actions/index';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  onAfterInsertRow = (row) => {
    this.props.addRow(row);
  }

  onAfterDeleteRow = (rowKeys) => {
    this.props.deleteRows(rowKeys);
  }

  afterSaveCell = (row, cellName, cellValue) => {
    this.props.updateRow(row, cellName, cellValue);
  }

  options = {
    afterInsertRow: this.onAfterInsertRow,
    afterDeleteRow: this.onAfterDeleteRow,
    insertText: 'Add Employee',
  };

  selectRowProp = {
    mode: 'checkbox'
  };

  cellEditProp = {
    mode: 'click',
    blurToSave: true,
    afterSaveCell: this.afterSaveCell
  };

  render() {
    return(
    <div className="home-container">
      <h2>Home</h2>
      <BootstrapTable
        data={ this.props.employeeData }
        cellEdit={ this.cellEditProp }
        deleteRow={ true }
        selectRow={ this.selectRowProp }
        insertRow={ true }
        search={ true }
        options={ this.options }
      >
        <TableHeaderColumn dataField='id' isKey>Employee ID</TableHeaderColumn>
        <TableHeaderColumn dataField='name'>Employee Name</TableHeaderColumn>
        <TableHeaderColumn dataField='address'>Employee Address</TableHeaderColumn>
      </BootstrapTable>
    </div>
    )
  }
}



function mapStateToProps(state, ownProps) {
  const { employeeData } = state;
  return {
    employeeData
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    deleteRows,
    addRow,
    updateRow
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
