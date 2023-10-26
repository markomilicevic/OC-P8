import Banner from "../../components/Banner";
import Dropdown from "../../components/Dropdown";
import styles from "./About.module.scss";

const sections = [
	{
		title: "Fiabilité",
		description:
			"Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.",
	},
	// NOTE: "Respect" and "Service" are sharing the same description on Figma
	{
		title: "Respect",
		description:
			"La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
	},
	// NOTE: "Respect" and "Service" are sharing the same description on Figma
	{
		title: "Service",
		description:
			"La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
	},
	{
		title: "Sécurité",
		description:
			"La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
	},
];

const About = () => (
	<main className={styles.about}>
		<div className={styles.banner}>
			<Banner cover="/images/cover-about.jpg" alternate="Paysage de montagne" />
		</div>
		<ul className={styles.sections}>
			{sections.map((section, index) => (
				<li key={`${index}-${section.title}`}>
					<Dropdown title={section.title} description={section.description} isHeadline={true} />
				</li>
			))}
		</ul>
	</main>
);

export default About;
