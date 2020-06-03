import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ToDoContainer from '../components/ToDoContainer';
import './Tab2.css';

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Busy Bees To-Do</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">To-Do List</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ToDoContainer name="Tab 2 page" />
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
