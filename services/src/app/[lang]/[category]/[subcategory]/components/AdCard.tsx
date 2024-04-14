import { getDictionary } from "@/app/utils/getDictionary";
import { supportedLanguages } from "@/types";
import { IAd } from "@/types/IAd";
import styles from "../Ads.module.css";
import Image from "next/image";
import { Avatar } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import Divider from "@mui/material/Divider";

type Props = {
  lang: supportedLanguages;
  ad: IAd;
};

export default async function AdCard({ lang, ad }: Props) {
  const dictionary = await getDictionary(lang);

  const hasImage = Boolean(ad.user.photo);
  let imagePhotoUrl;

  if (ad.user.photo) {
    imagePhotoUrl = URL.createObjectURL(ad.user.photo);
  }

  return (
    <article className={styles.ad}>
      <div className={styles.infoBlock}>
        <div className={styles.avatarBlock}>
          {hasImage ? (
            <Image
              src={imagePhotoUrl as string}
              alt={`${ad.user.name} photo`}
            />
          ) : (
            <Avatar />
          )}
          <div>{ad.user.name}</div>
        </div>
        <div className={styles.textBlock}>
          <div>{ad.title}</div>
          <div className={styles.feedbackBlock}>
            <div className={styles.starsBlock}>
              5 <StarIcon sx={{ color: "#b23850" }} />
            </div>
            <Divider orientation="vertical" flexItem />
            <div>0 {dictionary.ad.feedbacks}</div>
          </div>
          {ad.price && (
            <div>
              {dictionary.ad.price}: {ad.price}
            </div>
          )}
          {ad.description}
        </div>
      </div>

      <div className={styles.buttonsBlock}>
        <button className={`${styles.button} ${styles.connect}`}>
          {dictionary.ad.connect}
        </button>
        <button className={`${styles.button} ${styles.more}`}>
          {dictionary.ad.more}
        </button>
      </div>
    </article>
  );
}
