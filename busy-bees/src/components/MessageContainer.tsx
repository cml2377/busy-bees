import React from 'react';
import './MessageContainer.css';
import { IonList, IonItem, IonLabel, IonContent, IonAvatar } from '@ionic/react';

interface ContainerProps {
  name: string;
}

const MessageContainer: React.FC<ContainerProps> = ({ name }) => {
  return (
    <IonContent>
      {/*-- List of Text Items --*/}
      <IonList className="messageContainer">
        <IonItem>
          <IonAvatar slot="start"><svg width="40" height="40" data-jdenticon-value="user127"></svg></IonAvatar>
          <IonLabel>
            <h2>Teahouse</h2>
            <h3>Spill the Tea</h3>
            <p>Crystal: Sure! That sounds like a great idea...</p>
          </IonLabel>
        </IonItem>
        <IonItem>
          <IonAvatar slot="start"><svg width="40" height="40" data-jdenticon-value="user553"></svg></IonAvatar>
          <IonLabel>
            <h2>Brianna</h2>
            <h3>Fuckin Awesome</h3>
            <p>Yeah, so just make kissy sounds at cats to...</p>
          </IonLabel>
        </IonItem>
        <IonItem>
          <IonAvatar slot="start"><svg width="40" height="40" data-jdenticon-value="user355"></svg></IonAvatar>
          <IonLabel>
            <h2>Anthony</h2>
            <h3>High Standards in Code and Life</h3>
            <p>I don't think that would work...</p>
          </IonLabel>
        </IonItem>
        <IonItem>
          <IonAvatar slot="start"><svg width="40" height="40" data-jdenticon-value="Z"></svg></IonAvatar>
          <IonLabel>
            <h2>Z</h2>
            <h3>AKA Zaddy</h3>
            <p>Raven has been doing so well in training...</p>
          </IonLabel>
        </IonItem>
        <IonItem>
          <IonAvatar slot="start"><svg width="40" height="40" data-jdenticon-value="user126"></svg></IonAvatar>
          <IonLabel>
            <h2>Josh</h2>
            <h3>Pastor Josh</h3>
            <p>Where in the settings can I change...</p>
          </IonLabel>
        </IonItem>
        <IonItem>
          <IonAvatar slot="start"><svg width="40" height="40" data-jdenticon-value="Israel"></svg></IonAvatar>
          <IonLabel>
            <h2>Israel</h2>
            <h3>HBIC</h3>
            <p>LOL</p>
          </IonLabel>
        </IonItem>
        <IonItem>
          <IonAvatar slot="start"><svg width="40" height="40" data-jdenticon-value="Mags"></svg></IonAvatar>
          <IonLabel>
            <h2>Mags</h2>
            <h3>Deal With It</h3>
            <p>We're picking up the puppers on...</p>
          </IonLabel>
        </IonItem>
        <IonItem>
          <IonAvatar slot="start"><svg width="40" height="40" data-jdenticon-value="Dan"></svg></IonAvatar>
          <IonLabel>
            <h2>Dan</h2>
            <h3>The Only Sensible One Here</h3>
            <p>I think I'll be able to make it!</p>
          </IonLabel>
        </IonItem>
        <IonItem>
          <IonAvatar slot="start"><svg width="40" height="40" data-jdenticon-value="Justin"></svg></IonAvatar>
          <IonLabel>
            <h2>Justin</h2>
            <h3>Not Here to be Average</h3>
            <p>Sounds good, I'll let you know...</p>
          </IonLabel>
        </IonItem>
        <IonItem>
          <IonAvatar slot="start"><svg width="40" height="40" data-jdenticon-value="Kimi"></svg></IonAvatar>
          <IonLabel>
            <h2>Kimi</h2>
            <h3>Working Hard</h3>
            <p>We might be able to make it!!!</p>
          </IonLabel>
        </IonItem>
      </IonList>
    </IonContent>
  );
}

export default MessageContainer;
