import { useState } from "react";
import { Feed } from "../pages/Homepage";
import classes from "./Feeds.module.css";
import {
  TranslateClient,
  TranslateTextCommand,
} from "@aws-sdk/client-translate";

interface ContainerProps {
  feeds: Feed[];
}

const client = new TranslateClient({ defaultsMode: "mobile" });

const Feeds: React.FC<ContainerProps> = ({ feeds }) => {
  const [translatedItems, setTranslatedItems] = useState([])
  
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
  }

  return (
    <div className={classes.container}>
      {feeds?.map(({ _id, title, content, creator, comments }) => (
        <div className={classes.feeds} key={_id}>
          <div className={classes.user}>
            <img src="../../resources/icon.png" className={classes.img} />
            <p className={classes.creator}>{creator}</p>
          </div>
          <p className={classes.title}>{title}</p>
          <p className={classes.content}>{content}</p>
          <div className={classes.comments}>
            {comments?.map((comment) => (
              <p key={comment._id} className={classes.comment}>
                {comment.content}
              </p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Feeds;
