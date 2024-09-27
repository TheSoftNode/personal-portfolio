import ReviewForm from "@/components/review/ReviewForm";

const Review = () =>
{
    

    return (
        <main>
            <h1>This is the server-side rendered page</h1>
            {/* Import ReviewForm as a client-side component */}
            <ReviewForm />
        </main>
    );
};

export default Review;
