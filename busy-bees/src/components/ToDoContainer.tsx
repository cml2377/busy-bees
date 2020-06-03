import React from 'react';
import { useState } from 'react';
import './ToDoContainer.css';
import { IonList, IonItem, IonLabel, IonCheckbox, IonContent, IonButton } from '@ionic/react';
interface ContainerProps {
    name: string;
}

const ToDoContainer: React.FC<ContainerProps> = ({ name }) => {

    const [checked, setChecked] = useState(false);

    return (
        <IonContent>
            <IonList>
                <IonItem>
                    <IonLabel>Work on Busy Bees App</IonLabel>
                    <IonCheckbox color="primary" checked={true} onIonChange={e => setChecked(e.detail.checked)} />
                </IonItem>
                <IonItem>
                    <IonLabel>Brainstorm Drive Thru App with Anthony</IonLabel>
                    <IonCheckbox color="primary" checked={false} onIonChange={e => setChecked(e.detail.checked)} />
                </IonItem>
                <IonItem>
                    <IonLabel>Organize Anthony's birthday party</IonLabel>
                    <IonCheckbox color="primary" checked={checked} onIonChange={e => setChecked(e.detail.checked)} />
                </IonItem>
                <IonItem>
                    <IonLabel>Embroider Inspire Hoop</IonLabel>
                    <IonCheckbox color="primary" checked={true} onIonChange={e => setChecked(e.detail.checked)} />
                </IonItem>
            </IonList>
            <section className="full-width">
                <IonButton expand="block" color="primary" fill="solid">Add New To-Do</IonButton>
            </section>
        </IonContent>
    );
};

export default ToDoContainer;