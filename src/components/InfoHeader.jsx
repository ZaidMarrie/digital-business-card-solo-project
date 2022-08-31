import { FaEnvelope, FaLinkedin } from "react-icons/fa";

import profilePicture from "../assets/zaid.jpg";

function InfoHeader() {
	return (
		<header className="header">
			<img
				src={profilePicture}
				alt="headshot of zaid marrie smiling at the camera"
				className="header__img"
			/>
			<h1 className="username">Zaid Marrie</h1>
			<p className="user-role">Frontend Developer</p>
			<p className="user-site">zaidmarrie.website</p>
			<button className="btn">
				<FaEnvelope />
				Email
			</button>
			<button className="btn btn--blue">
				<FaLinkedin />
				LinkedIn
			</button>
		</header>
	);
}

export default InfoHeader;
