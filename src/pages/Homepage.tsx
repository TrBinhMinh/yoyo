import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import Feeds from "../components/Feeds";
import "./Homepage.css";

export interface Feed {
  _id: number;
  userId: string;
  content: string;
  creator: string;
  comments: {
    _id: number;
    content: string;
  }[];
}

const feeds: Feed[] = [
  {
    _id: 0,
    userId: "tim_02",
    content: "a nice collection of cars",
    creator: "Tim",
    comments: [{ _id: 0, content: "very good" }],
  },
  {
    _id: 1,
    userId: "yuna_jp",
    content: "travelling around Asia",
    creator: "Yuna",
    comments: [{ _id: 0, content: "this is nice" }],
  },
  {
    _id: 2,
    userId: "user_kyle",
    content: "this is about pop culture",
    creator: "Kyle",
    comments: [{ _id: 0, content: "liked!" }],
  },
  {
    _id: 3,
    userId: "football_lover",
    content: "beautiful stars at night",
    creator: "Mike",
    comments: [{ _id: 0, content: "beautiful!" }],
  },
];

const Homepage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Homepage</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Homepage</IonTitle>
          </IonToolbar>
        </IonHeader>
        <Feeds feeds={feeds} />
      </IonContent>
    </IonPage>
  );
};

export default Homepage;
