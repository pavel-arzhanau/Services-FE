export default function getFeedbackWordByQuantity(quantity: number) {
  if (quantity % 10 === 1 && quantity % 100 !== 11) {
    return "feedbacks1"; // 'отзыв';
  } else if (
    (quantity % 10 === 2 && quantity % 100 !== 12) ||
    (quantity % 10 === 3 && quantity % 100 !== 13) ||
    (quantity % 10 === 4 && quantity % 100 !== 14)
  ) {
    return "feedbacks2"; //'отзыва';
  } else {
    return "feedbacks3"; //'отзывов';
  }
}
