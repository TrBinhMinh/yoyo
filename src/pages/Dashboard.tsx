import {
  IonAvatar,
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonRow,
  IonText,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { useState } from "react";
import {
  TranslateClient,
  TranslateTextCommand,
} from "@aws-sdk/client-translate";

import classes from "./Dashboard.module.css";
import { personCircleOutline } from "ionicons/icons";

const client = new TranslateClient({ defaultsMode: "mobile" });

const Dashboard: React.FC = () => {
  const [posts, setPosts] = useState([
    {
      _id: 0,
      title: "Post 1",
      content: "This is post 1 content",
      score: 0.5,
      creator: "Minh",
      comments: [{ content: "Comment 1" }],
    },
    {
      _id: 1,
      title: "Post 2",
      content: "This is post 2 content",
      score: 1,
      creator: "Hung",
      comments: [{ content: "Comment 2" }],
    },
  ]);
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Dashboard</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Dashboard</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonGrid>
          <IonRow
            color="tertiary"
            style={{ background: "var(--ion-color-tertiary)" }}
          >
            <IonCol size="2.2" className={classes["header-row"]}>
              Thumbnail
            </IonCol>
            <IonCol size="2.2" className={classes["header-row"]}>
              Title
            </IonCol>
            <IonCol size="2.2" className={classes["header-row"]}>
              Creator
            </IonCol>
            <IonCol size="2.2" className={classes["header-row"]}>
              Score
            </IonCol>
            <IonCol size="2.2" className={classes["header-row"]}>
              Action
            </IonCol>
          </IonRow>
          {posts.map((post) => (
            <IonRow key={post._id}>
              <IonCol size="2.2">
                <IonIcon
                  icon={personCircleOutline}
                  size="large"
                  className={classes.thumbnail}
                ></IonIcon>
              </IonCol>
              <IonCol size="2.2" className={classes.title}>
                {post.title}
              </IonCol>
              <IonCol size="2.2" className={classes.creator}>
                {post.creator}
              </IonCol>
              <IonCol size="2.2" className={classes.score}>
                {post.score}
              </IonCol>
              <IonCol size="2.2">
                <IonButton
                  fill="outline"
                  color="tertiary"
                  className={classes.button}
                  size="small"
                >
                  Moderate
                </IonButton>
              </IonCol>
            </IonRow>
          ))}
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Dashboard;
