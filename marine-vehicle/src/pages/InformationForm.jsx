import Wizard from "../components/Wizard";

function MarineInfoFForm() {
    return null;
}

const steps = [
    { label: 'Step 1', component: <MarineInfoFForm /> },
    // Add more steps as needed
];

const InformationForm = ()=>
{
    return <Wizard steps={steps} />
}

export default InformationForm
