import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCardSubtitle, IonCardTitle } from '@ionic/react';
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
            <IonCardTitle id="toDoTitle">To-Do List</IonCardTitle>
            <IonCardSubtitle id="subtitle">Keep track of your tasks here!</IonCardSubtitle>
          </IonToolbar>

        </IonHeader>
        <ToDoContainer name="Tab 2 page" />
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
