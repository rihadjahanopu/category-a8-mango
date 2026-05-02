import Image from "next/image";

export default function TrendingCategories() {
	return (
		<section className="bg-base-200/50 py-24 border-y border-base-200 relative overflow-hidden">
			<div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-[80px]"></div>
			<div className="max-w-7xl mx-auto px-6 w-full relative z-10">
				<div className="text-center mb-16 max-w-3xl mx-auto">
					<h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
						Explore Categories
					</h2>
					<p className="text-lg opacity-70">
						Dive into your favorite genres and discover new worlds of
						imagination and knowledge.
					</p>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{[
						{
							title: "Story",
							subtitle: "Immersive Fiction",
							image:
								"https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=600&auto=format&fit=crop",
						},
						{
							title: "Tech",
							subtitle: "Modern Development",
							image:
								"https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=600&auto=format&fit=crop",
						},
						{
							title: "Science",
							subtitle: "Universe & Beyond",
							image:
								"https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=600&auto=format&fit=crop",
						},
					].map((category) => (
						<div
							key={category.title}
							className="relative h-80 rounded-3xl overflow-hidden group cursor-pointer shadow-xl border border-white/10">
							<Image
								src={category.image}
								alt={category.title}
								fill
								className="object-cover transition-transform duration-700 group-hover:scale-110"
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-opacity"></div>
							<div className="absolute inset-0 flex flex-col items-start justify-end p-8 text-white">
								<span className="badge badge-primary border-none mb-3 shadow-lg">
									{category.subtitle}
								</span>
								<h3 className="text-4xl font-bold tracking-wide mb-2 group-hover:text-primary transition-colors">
									{category.title}
								</h3>
								<div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all translate-y-4 group-hover:translate-y-0 text-sm font-medium">
									Browse Category <span aria-hidden="true">&rarr;</span>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
