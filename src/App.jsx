import InfoHeader from "./components/InfoHeader";
import AboutSection from "./components/AboutSection";
import InterestsSection from "./components/InterestsSection";
import Footer from "./components/Footer";

function App() {
	return (
		<div className="card">
			<InfoHeader />
			<div className="card__body">
				<AboutSection />
				<InterestsSection />
			</div>
			<Footer />
		</div>
	);
}

export default App;
