import React from "react";
import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
// import { useHistory } from "react-router-dom";

const AllGoals: React.FC = () => {
  //   const history = useHistory();
  //   const changePageHandler = () => {
  //     history.push("/course-goals");
  //   };
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton></IonMenuButton>
          </IonButtons>
          <IonTitle>All Goals</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>All goals listed here</IonContent>
    </IonPage>
  );
};

export default AllGoals;
