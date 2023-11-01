import React from 'react';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Table from './Table'; // Import your table component

const options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
];
const creditnotesColumns = [
    {
        fieldKey: 'date_time',
        label: 'Date & Time',
    },
    {
        fieldKey: 'transfer_from',
        label: 'Transfer From',
    },
    {
        fieldKey: 'credit_note_no',
        label: 'Credit Note No',
    },
    {
        fieldKey: 'invoice_no',
        label: 'Invoice No',
    },
    {
        fieldKey: 'total_products',
        label: 'Total products',
    },
    {
        fieldKey: 'total_qty',
        label: 'Total Qty',
    },
    {
        fieldKey: 'amount',
        label: 'Amount',
    },
];
const creditnotes = [
    {
        date_time: '22-07-2023 3:20 PM',
        transfer_from: 'Arun Riderboy',
        credit_note_no: 'CN101001003',
        invoice_no: 'RI101001004',
        total_products: 3,
        total_qty: 30,
        amount: '₹285.60',
    },
    {
        date_time: '20-07-2023 3:20 PM',
        transfer_from: 'Saurabh Bhatteja',
        credit_note_no: 'CN101001023',
        invoice_no: 'RI101001065',
        total_products: 2,
        total_qty: 40,
        amount: '₹245.60',
    },
    {
        date_time: '22-07-2023 3:20 PM',
        transfer_from: 'Arun Riderboy',
        credit_note_no: 'CN101001003',
        invoice_no: 'RI101001004',
        total_products: 3,
        total_qty: 30,
        amount: '₹285.60',
    },
    {
        date_time: '20-07-2023 3:20 PM',
        transfer_from: 'Saurabh Bhatteja',
        credit_note_no: 'CN101001023',
        invoice_no: 'RI101001065',
        total_products: 2,
        total_qty: 40,
        amount: '₹245.60',
    },
    {
        date_time: '22-07-2023 3:20 PM',
        transfer_from: 'Arun Riderboy',
        credit_note_no: 'CN101001003',
        invoice_no: 'RI101001004',
        total_products: 3,
        total_qty: 30,
        amount: '₹285.60',
    },
    {
        date_time: '20-07-2023 3:20 PM',
        transfer_from: 'Saurabh Bhatteja',
        credit_note_no: 'CN101001023',
        invoice_no: 'RI101001065',
        total_products: 2,
        total_qty: 40,
        amount: '₹245.60',
    },
];

const MySelect = () => {
    return (
        <div className='d-flex justify-content-center'>
            <Select label="Select an option">
            <table className='table table-bordered '>
                <thead>
                    <tr>
                        {
                            creditnotesColumns.map((column) => {
                                return (
                                    <th>{column.label}</th>
                                )
                            })
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        creditnotes.map((option) => {
                            return (
                                <tr>
                                        {
                                            creditnotesColumns.map((column) => {
                                                return (
                                                    <td>{option[column.fieldKey]}</td>
                                                )
                                            })
                                        }
                                    </tr>

                                // <MenuItem key={option.invoice_no} value={option}>
                                //     <Table data={option} />
                                //     <tr>
                                //         {
                                //             creditnotesColumns.map((column) => {
                                //                 return (
                                //                     <td>{option[column.fieldKey]}</td>
                                //                 )
                                //             })
                                //         }
                                //     </tr>
                                //  </MenuItem>
                            )


                        })}
                </tbody>
            </table>

        </Select>
        </div>
        
    );
};

export default MySelect;
