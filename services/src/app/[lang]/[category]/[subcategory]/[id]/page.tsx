import { getDictionary } from "@/app/utils/getDictionary";
import { supportedLanguages } from "@/types";
import MainLayout from "@/app/components/MainLayout/MainLayout";
import styles from "./Ad.module.css";
import { getAdById } from "@/app/actions/ads";
import Image from "next/image";
import { Avatar } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import Divider from "@mui/material/Divider";
import { getFeedbackWordByQuantity } from "@/utils";
import Comment from "./Comment";

type Props = {
  params: {
    lang: supportedLanguages;
    category: string;
    subcategory: string;
    id: string;
  };
};

export default async function Subcategory({ params: { lang, id } }: Props) {
  const dictionary = await getDictionary(lang);
  const ad = await getAdById(id);

  const hasImage = Boolean(ad.user.photo);
  let imagePhotoUrl;

  const feedbackWord = getFeedbackWordByQuantity(ad.comments.length);

  if (ad.user.photo) {
    imagePhotoUrl = URL.createObjectURL(ad.user.photo);
  }

  return (
    <MainLayout lang={lang}>
      <main className={styles.main}>
        <section className={styles.ad}>
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
                <div>
                  {ad.comments.length} {dictionary.ad[feedbackWord]}
                </div>
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
            <button className={`${styles.button} ${styles.complain}`}>
              {dictionary.ad.complain}
            </button>
          </div>

          <div className={styles.feedbacksSection}>
            <h3>{dictionary.ad.feedbacks}</h3>
            <ul className={styles.feedbacksList}>
              {ad.comments.map((comment) => {
                return (
                  <li key={comment.id}>
                    <Comment lang={lang} comment={comment} />
                  </li>
                );
              })}
            </ul>
          </div>
        </section>
      </main>
    </MainLayout>
  );
}
