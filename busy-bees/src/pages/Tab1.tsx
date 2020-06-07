import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonIcon } from '@ionic/react';
import { addCircle } from 'ionicons/icons';
import MessageContainer from '../components/MessageContainer';
import './Tab1.css';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Busy-Bees</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Messages</IonTitle>
            <IonIcon id="newMessageBtn" slot="start" md={addCircle} ios={addCircle}>Hello</IonIcon>
          </IonToolbar>
        </IonHeader>
        <MessageContainer name="Tab 1 page" />
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
