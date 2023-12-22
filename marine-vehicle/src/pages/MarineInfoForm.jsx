// MyForm.jsx
import React, {useState} from 'react';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import FileUpload from "react-material-file-upload";



const MarineInfoForm = () => {
    const [files, setFiles] = useState([]);

    return (
        <form>
            {/* Date Picker */}

            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={['DatePicker']}>
                    <DatePicker label="Basic date picker" />
                </DemoContainer>
            </LocalizationProvider>
            {/* Text Input */}
            <TextField label="Name" variant="outlined" fullWidth margin="normal" />

            {/* Dropdown */}
            <FormControl fullWidth variant="outlined" margin="normal">
                <InputLabel>Select Option</InputLabel>
                <Select label="Select Option">
                    <MenuItem value={1}>Option 1</MenuItem>
                    <MenuItem value={2}>Option 2</MenuItem>
                    <MenuItem value={3}>Option 3</MenuItem>
                </Select>
            </FormControl>
            <FileUpload value={files} onChange={setFiles} />

            {/* Submit Button */}
            <Button variant="contained" color="primary" type="submit">
                Submit
            </Button>
        </form>
    );
};

export default MarineInfoForm;

