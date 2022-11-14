import heroImg from '../assets/hero-img.jpg';
import play from '../assets/play.svg';

export default function Hero() {
	return(
		<div className="bg-white pb-8">
			<section className="container">
				<div className="pt-[2rem] flex justify-between">
					<div className="w-[62%]">
						<h1 className="mb-8 text-[3rem] text-violet-900 text-left">
							Tired of tracking your students' records on paper? It's time to go digital
						</h1>
						<p className="mb-8 text-[1.25rem] text-left">
							Manage student records, administer tests and track attendance with our <span className="text-indigo-900 font-semibold">student management system</span>
						</p>
						<div className="flex items-start">
							<a href="/signup" className="mr-4 p-3 rounded-lg bg-violet-700 text-violet-100 font-bold">Sign Up</a>
							<a href="/demo" className="flex max-w-[100%] p-2.5 border-2 border-violet-500 rounded-lg bg-violet-100 text-violet-900 font-bold">
								<span>Live Demo</span>
								<img src={play} alt="Play button icon" width="40" className="pl-4 bg-violet-100"/>
							</a>
						</div>
					</div>
					<img src={heroImg} alt="Student grades" className="w-[50%]"/>
				</div>
			</section>
		</div>
	);
}
