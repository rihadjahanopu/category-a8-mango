import booksData from "@/data/books.json";
import HeroSection from "@/components/HeroSection";
import MarqueeSection from "@/components/MarqueeSection";
import FeaturedBooks from "@/components/FeaturedBooks";
import TrendingCategories from "@/components/TrendingCategories";
import TestimonialsSection from "@/components/TestimonialsSection";
import { Book } from "@/types";

export default function Home() {
	const featuredBooks = (booksData as Book[]).slice(0, 4);

	return (
		<div className="flex flex-col gap-24 pb-20">
			<HeroSection />
			<MarqueeSection />
			<FeaturedBooks featuredBooks={featuredBooks} />
			<TrendingCategories />
			<TestimonialsSection />
		</div>
	);
}
