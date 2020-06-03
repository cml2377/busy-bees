import React from 'react';
import { useState } from 'react';
import './ToDoContainer.css';
import { IonList, IonItem, IonLabel, IonCheckbox, IonContent, IonPage, IonHeader, IonToolbar, IonItemDivider, IonTitle } from '@ionic/react';
interface ContainerProps {
    name: string;
}

const checkboxList = [
    { val: 'Do Laundry', isChecked: true },
    { val: 'Finish Busy Bees', isChecked: false },
    { val: 'Work with Anthony to figure out Drive Thru App', isChecked: false }
];

const ToDoContainer: React.FC<ContainerProps> = ({ name }) => {
    const [checked, setChecked] = useState(false);

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>CheckboxExamples</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonList>
                    <IonItemDivider>Default Checkbox</IonItemDivider>
                    <IonItem>
                        <IonLabel>Checked: {JSON.stringify(checked)}</IonLabel>
                        <IonCheckbox checked={checked} onIonChange={e => setChecked(e.detail.checked)} />
                    </IonItem>

                    <IonItemDivider>Disabled Checkbox</IonItemDivider>
                    <IonItem><IonCheckbox slot="end" disabled={true} /></IonItem>

                    <IonItemDivider>Checkbox Colors</IonItemDivider>
                    <IonItem>
                        <IonCheckbox slot="end" color="primary" />
                        <IonCheckbox slot="end" color="secondary" />
                        <IonCheckbox slot="end" color="danger" />
                        <IonCheckbox slot="end" color="light" />
                        <IonCheckbox slot="end" color="dark" />
                    </IonItem>
                    <IonItemDivider>Checkboxes in a List</IonItemDivider>

                    {checkboxList.map(({ val, isChecked }, i) => (
                        <IonItem key={i}>
                            <IonLabel>{val}</IonLabel>
                            <IonCheckbox slot="end" value={val} checked={isChecked} />
                        </IonItem>
                    ))}
                </IonList>
            </IonContent>
        </IonPage>
    );
};

export default ToDoContainer;