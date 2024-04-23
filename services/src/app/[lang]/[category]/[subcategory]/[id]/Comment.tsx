import { getDictionary } from "@/app/utils/getDictionary";
import { IComment, supportedLanguages } from "@/types";
import styles from "./Ad.module.css";
import { Avatar } from "@mui/material";

type Props = {
  lang: supportedLanguages;
  comment: IComment;
};

export default async function Comment({ lang, comment }: Props) {
  const dictionary = await getDictionary(lang);

  const hasImage = Boolean(comment.user.photo);
  let imagePhotoUrl;

  if (comment.user.photo) {
    imagePhotoUrl = URL.createObjectURL(comment.user.photo);
  }

  const updatedData = new Date(comment.updatedAt);

  return (
    <div className={styles.comment}>
      <div className={styles.commentUserBlock}>
        <Avatar />
        <div className={styles.commentTextBlock}>
          <div>{comment.user.name}</div>
          <div>
            <div>{updatedData.toLocaleDateString("ru-RU")}</div>
            {comment.updatedAt !== comment.createdAt && <div>edited</div>}
          </div>
        </div>
      </div>
      <div className={styles.commentContent}>{comment.content}</div>
    </div>
  );
}
