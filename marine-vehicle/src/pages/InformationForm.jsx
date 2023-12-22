import Wizard from "../components/Wizard";
import MarineInfoForm from "./MarineInfoForm";



const steps = [
    { label: 'Step 1', component: <MarineInfoForm/> },
    { label: 'Step 2', component: <MarineInfoForm/> },
    { label: 'Step 3', component: <MarineInfoForm/> },
    // Add more steps as needed
];

const InformationForm = ()=>
{
    return <Wizard steps={steps} />
}

export default InformationForm
