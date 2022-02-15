import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import * as PointsActions from '../../../../store/actions/pointsActions';

interface ModalInputsProps {
  lat: number;
  lng: number;
  addSinglePoints: typeof PointsActions.addSinglePointsAction;
  closeModal: () => void
}

const pointsTypes = [
  "single",
  "multiple"
];

const ModalInputs = ({ lat, lng, addSinglePoints, closeModal }: ModalInputsProps) => {
  const [pointType, setPointType] = React.useState('');
  const [description, setDescription] = React.useState('');

  const handleTypeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPointType(event.target.value);
  };
  const handleDescriptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(event.target.value);
  };

  const handleClick = () => {
    const point = {
      type: pointType,
      lat: lat,
      lng: lng,
      description: description
    }
    addSinglePoints(point);
    closeModal()
  }

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          required
          id="outlined-select-type"
          select
          label="Type"
          type="text"
          value={pointType}
          autoComplete="Single"
          helperText="Please select point type"
          onChange={handleTypeChange}
        >
          {pointsTypes.map((pointType: string) => (
            <MenuItem key={pointType} value={pointType}>
              {pointType}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          required
          id="outlined-longitude"
          label="Longitude"
          value={lng.toFixed(4)}
        />
        <TextField
          required
          id="outlined-latitude"
          label="Latitude"
          value={lat.toFixed(4)}
        />

        <TextField
          required
          id="outlined-description"
          label="Description"
          type="text"
          onChange={handleDescriptionChange}
        />
        <Button variant="contained" onClick={handleClick}>
          Add Point
        </Button>
      </div>
    </Box >
  );
}

export default ModalInputs