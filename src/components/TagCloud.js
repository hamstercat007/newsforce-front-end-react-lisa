import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

export default function TagCloud({ handleToggle }) {
  return (
    <div className="flex-row">
      <div className="flex-col">
        <FormControlLabel
          control={<Switch defaultChecked value="africa" onChange={(al_event) => handleToggle(al_event.target.value)} />}
          label="Africa"
        />
        <FormControlLabel
          control={<Switch defaultChecked value="middle-east" onChange={(al_event) => handleToggle(al_event.target.value)} />}
          label="Middle East"
        />
      </div>
      <div className="flex-col">
        <FormControlLabel
          control={<Switch defaultChecked value="asia" onChange={(al_event) => handleToggle(al_event.target.value)} />}
          label="Asia"
        />
        <FormControlLabel
          control={<Switch defaultChecked value="europe" onChange={(al_event) => handleToggle(al_event.target.value)} />}
          label="Europe"
        />
      </div>
      <div className="flex-col">
        <FormControlLabel
          control={<Switch defaultChecked value="north-america" onChange={(al_event) => handleToggle(al_event.target.value)} />}
          label="North America"
        />
        <FormControlLabel
          control={<Switch defaultChecked value="south-america" onChange={(al_event) => handleToggle(al_event.target.value)} />}
          label="South America"
        />
      </div>
      <div className="flex-col">
        <FormControlLabel
          control={<Switch defaultChecked value="Al Jazeera English" onChange={(al_event) => handleToggle(al_event.target.value)} />}
          label="Al Jazeera"
        />
        <FormControlLabel
          control={<Switch defaultChecked value="Associated Press" onChange={(ap_event) => handleToggle(ap_event.target.value)} />}
          label="Associated Press"
        />
        <FormControlLabel
          control={<Switch defaultChecked value="BBC News" onChange={(bbc_event) => handleToggle(bbc_event.target.value)} />}
          label="BBC News"
        />
      </div>
    </div>
  );
}