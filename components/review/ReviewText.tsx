import Link from "next/link";
import { useState } from "react";
import { CardDescription } from "../ui/card";

interface ReviewProps
{
    reviewText: string;
    reviewId: any;
}

const ReviewText = ({ reviewText, reviewId }: ReviewProps) =>
{
    const [wordLimit] = useState(450);
    const words = reviewText.split("");

    // If the review text is longer than the word limit
    const isTruncated = words.length > wordLimit;
    const truncatedText = words.slice(0, wordLimit).join("");

    return (
        <CardDescription className="text-md xlg:text-lg text-muted-foreground prose">
            {isTruncated ? (
                <>
                    {truncatedText}...{" "}
                    <Link href={`/review/${reviewId}`} className="text-xs font-semibold dark:text-[#FE705A] text-slate-950">
                        More
                    </Link>
                </>
            ) : (
                reviewText
            )}
        </CardDescription>
    );
};

export default ReviewText;
