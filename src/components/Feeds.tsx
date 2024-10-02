import { useState } from "react";
import { Feed } from "../pages/Homepage";
import classes from "./Feeds.module.css";
import {
  TranslateClient,
  TranslateTextCommand,
} from "@aws-sdk/client-translate";
import { IonButton, IonIcon, IonItem } from "@ionic/react";
import { chatbubbleOutline, heartOutline, repeatOutline, shareSocialOutline } from "ionicons/icons";

interface ContainerProps {
  feeds: Feed[];
}

const client = new TranslateClient({ defaultsMode: "mobile", region: 'ap-east-1' });

const Feeds: React.FC<ContainerProps> = ({ feeds }) => {
  const translate = async (text: string) => {
    const input = { // TranslateTextRequest
      Text: text, // required
      SourceLanguageCode: "en", // required
      TargetLanguageCode: "ko", // required
      Settings: { // TranslationSettings
        Formality: "INFORMAL",
        Profanity: "MASK",
        Brevity: "ON",
      },
    };
    const command = new TranslateTextCommand(input as any);
    const response = await client.send(command);

    console.log("response: ", response);
    
  }

  return (
    <div className={classes.container}>
      {feeds?.map(({ _id, userId, content, creator, comments }) => (
        <IonItem lines="none" className={classes.feed} key={_id}>
          <img className={classes.img} src="../../resources/icon.png" alt="Avatar" />
          <div className={classes.content}>
            <div className={classes.header}>
              <h2>{creator}</h2>
              <span className={classes.username}>{userId}</span>
            </div>
            <p className={classes.text}>{content}</p>
            <IonButton fill="clear" className={classes.btn} onClick={translate.bind(null, content)}>Translate</IonButton>
            <div className={classes.footer}>
              <IonIcon className={classes.icon} icon={chatbubbleOutline}></IonIcon>
              <IonIcon className={classes.icon} icon={repeatOutline}></IonIcon>
              <IonIcon className={classes.icon} icon={heartOutline}></IonIcon>
              <IonIcon className={classes.icon} icon={shareSocialOutline}></IonIcon>
            </div>
          </div>
        </IonItem>
      ))}
    </div>
  );
};

export default Feeds;
