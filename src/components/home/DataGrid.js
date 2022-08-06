import { useState } from 'react';
import {AgGridReact} from 'ag-grid-react';
import { Modal } from './Modal';
import { UpdForm } from './UpdForm';
import { useModal } from '../../hooks/useModal';
import { DelContact } from './DelContact';
import ContactSearch from './ContactSearcher/ContactSearcher';
import handleSearchContact from '../../helper/handleSearchContacts';

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import './DataGrid.css';

export default function PhoneDataGrid({phonebook, phonebookList, setPhonebookList}) {
  const [
    isOpenUpdModal,
    openUpdModal,
    closeUpdModal
 ] = useModal(false);

  const [
    isOpenDelModal,
    openDelModal,
    closeDelModal
 ] = useModal(false);

 const [currData, setCurrData] = useState('');

  const handleUpdContact = (params) => {
      setCurrData(params.data);
      return openUpdModal();

    }

  const handleDelContact = (params) => {
      setCurrData(params.data);
      return openDelModal();
  }
    
  const [columnDefs] = useState([
      {field: 'name', sortable: true, width: 160},
      {field: 'phone', sortable: true},
      {field: 'update', sortable: true, width: 140,
        cellRendererFramework: (params) => {
          return(
          <div className='datagridBtnsContainer'>
            <button className='uptBtnColor' onClick={() => handleUpdContact(params)}>update</button>     
          </div>)
        }
      },
      {field: 'delete', sortable: true, width: 140,
        cellRendererFramework: (params) =>
          <div className='datagridBtnsContainer'>
            <button className='delBtnColor' onClick={() => handleDelContact(params)}>delete</button>
          </div>
      }, 
    ]);
    
    return(
      <div className='dataGridContainer'>
        <div className='dataGridHeader'>
          <h3>Contact List</h3>
          {
            isOpenUpdModal &&
            <Modal isOpen={isOpenUpdModal} closeModal={closeUpdModal}>
                <UpdForm closeModal={closeUpdModal} setPhonebookList={setPhonebookList} currData={currData}/>
            </Modal>
          }
          <Modal isOpen={isOpenDelModal} closeModal={closeDelModal}>
              <DelContact closeModal={closeDelModal} currData={currData}/>
          </Modal>
          <ContactSearch onSearch={e => handleSearchContact(e, phonebook, setPhonebookList)}/>
        </div>
        <div className='ag-theme-alpine-dark' style={{height:340, width:610}}>
          <AgGridReact
            columnDefs={columnDefs}
            rowData={phonebookList}
            paginationAutoPageSize={true}
            pagination={true}
          />
        </div>
      </div>
    )
}