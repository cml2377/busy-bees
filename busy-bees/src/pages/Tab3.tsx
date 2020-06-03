import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import SettingsContainer from '../components/SettingsContainer';
import './Tab3.css';

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Busy Bees Settings</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">User Settings</IonTitle>
          </IonToolbar>
        </IonHeader>
        <SettingsContainer name="Tab 3 page" />
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
