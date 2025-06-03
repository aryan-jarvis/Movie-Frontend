import React, { useState } from "react";
import { Rating } from "react-simple-star-rating";

function ReviewForm({ onSubmit }) {
  const [author, setAuthor] = useState("");
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ author, comment, rating });
    setAuthor("");
    setComment("");
    setRating(0);
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <input
        type="text"
        placeholder="Your Name"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        style={styles.input}
        required
      />
      <textarea
        placeholder="Write your review..."
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        style={styles.textarea}
        required
      />
      <div style={styles.ratingContainer}>
        <span style={{ marginRight: 10 }}>Your Rating:</span>
        <Rating onClick={setRating} ratingValue={rating} />
      </div>
      <button type="submit" style={styles.button}>
        Submit Review
      </button>
    </form>
  );
}

function ReviewItem({ review }) {
  return (
    <div style={styles.reviewItem}>
      <h3 style={styles.reviewAuthor}>{review.author}</h3>
      <Rating ratingValue={review.rating} readonly={true} />
      <p style={styles.reviewComment}>{review.comment}</p>
    </div>
  );
}

function PostRating() {
  const [reviews, setReviews] = useState([]);
  //   const [averageRating, setAverageRating] = useState(0);

  const handleReviewSubmit = (newReview) => {
    const updatedReviews = [...reviews, newReview];
    setReviews(updatedReviews);
    // updateAverageRating(updatedReviews);
  };

  //   const updateAverageRating = (updatedReviews) => {
  //     if (updatedReviews.length === 0) {
  //       setAverageRating(0);
  //       return;
  //     }
  //     const totalRating = updatedReviews.reduce(
  //       (sum, review) => sum + review.rating,
  //       0
  //     );
  //     setAverageRating(totalRating / updatedReviews.length);
  //   };

  return (
    <div style={styles.container}>
      <h2>Ratings and Reviews</h2>
      {/* <p style={styles.averageRating}>
        Average Rating: <Rating ratingValue={averageRating} readonly={true} />
        <span style={{ marginLeft: 8, fontWeight: "bold" }}>
          {averageRating.toFixed(1)} / 100
        </span>
      </p> */}
      <ReviewForm onSubmit={handleReviewSubmit} />
      <div style={styles.reviewsList}>
        {reviews.map((review, index) => (
          <ReviewItem key={index} review={review} />
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: 600,
    margin: "20px auto",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    padding: 20,
    border: "1px solid #ddd",
    borderRadius: 8,
    backgroundColor: "#fafafa",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    marginBottom: 30,
  },
  input: {
    padding: 10,
    marginBottom: 15,
    fontSize: 16,
    borderRadius: 4,
    border: "1px solid #ccc",
  },
  textarea: {
    padding: 10,
    marginBottom: 15,
    fontSize: 16,
    borderRadius: 4,
    border: "1px solid #ccc",
    resize: "vertical",
    minHeight: 80,
  },
  ratingContainer: {
    display: "flex",
    alignItems: "center",
    marginBottom: 20,
  },
  button: {
    padding: "10px 20px",
    backgroundColor: "#007bff",
    color: "white",
    fontSize: 16,
    border: "none",
    borderRadius: 4,
    cursor: "pointer",
    alignSelf: "flex-start",
  },
  reviewItem: {
    padding: 15,
    marginBottom: 15,
    border: "1px solid #ddd",
    borderRadius: 6,
    backgroundColor: "white",
  },
  reviewAuthor: {
    margin: "0 0 8px 0",
    fontSize: 18,
    color: "#333",
  },
  reviewComment: {
    marginTop: 8,
    fontSize: 16,
    color: "#555",
  },
  averageRating: {
    display: "flex",
    alignItems: "center",
    fontSize: 18,
    marginBottom: 20,
  },
  reviewsList: {
    marginTop: 10,
  },
};

export default PostRating;
