import ReviewForm from "@/components/review/ReviewForm";
import { CircleArrowLeft } from "lucide-react";
import Link from "next/link";

const Review = () =>
{


    return (
        <section className="lg:px-16 w-full py-12 mt-16">
            <div className="container sm:!w-[90%] md:!w-[80%]">
                <Link href="/#reviewme">
                    <CircleArrowLeft className="!text-[#FE7054]" />
                </Link>
                {/* <h2 className="section-title text-3xl md:text-4xl !text-center font-bold mb-8 text-[#FE705A]"> */}
                <h2 className="section-title w-[100%] !justify-center mb-8 text-[#FE705A]">
                    Leave a Review
                </h2>
                <ReviewForm />
            </div>
        </section>
    );
};

export default Review;
