import React from 'react';
import { useState } from 'react';
import './SettingsContainer.css';
import { IonList, IonItem, IonLabel, IonCheckbox, IonContent, IonButton, IonAvatar, IonInput } from '@ionic/react';

interface ContainerProps {
    name: string;
}

const SettingsContainer: React.FC<ContainerProps> = ({ name }) => {
    const [text, setText] = useState<string>();
    const [number, setNumber] = useState<number>();

    return (
        <IonContent>
            <IonList>
                <IonItem id="userProfileImg">
                    <div id="profileContainer">
                        <IonAvatar id="profileAvatar" slot="start"><svg width="90" height="90" data-jdenticon-value="Crystal"></svg></IonAvatar>
                        <IonButton id="profileImgButton" color="primary">Change Profile Picture</IonButton>
                    </div>
                </IonItem>

                <IonItem>
                    <IonInput value={text} placeholder="Crystal" onIonChange={e => setText(e.detail.value!)}>First Name</IonInput>
                </IonItem>

                <IonItem>
                    <IonInput value={text} placeholder="Ly" onIonChange={e => setText(e.detail.value!)}>Last Name</IonInput>
                </IonItem>

                <IonItem>
                    <IonInput value={text} placeholder="Description/Mood" onIonChange={e => setText(e.detail.value!)}>Motto</IonInput>
                </IonItem>

                <IonItem>
                    <IonInput value={number} placeholder="1234567890" onIonChange={e => setNumber(parseInt(e.detail.value!, 10))}>Phone Number</IonInput>
                </IonItem>

                <IonItem>
                    <IonInput value={text} placeholder="example@example.com" onIonChange={e => setText(e.detail.value!)}>Email</IonInput>
                </IonItem>
            </IonList>
            <IonButton id="saveProfileChangesButton" color="primary">Save Changes</IonButton>
        </IonContent>
    );
};

export default SettingsContainer;