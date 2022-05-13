import Video from "@components/video";
import "./Home.css";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home">
      <Video />
      <div className="présentation">
        <div className="prez1">
          <h2 className="monTitre">
            I have a green and today, this earth smiles again!
          </h2>
          <p>
            Faire <span className="bold">rêver</span> l&apos;écologie,
            c&apos;est dès aujourd&apos;hui...{" "}
            <span className="bold">Ensemble</span>. I have a green, c&apos;est
            d&apos;abord un état d&apos;esprit, une envie de{" "}
            <span className="bold">transmettre</span>, de{" "}
            <span className="bold">partager</span>, de s&apos;inspirer des
            bonnes idées et des savoirs de chacun pour avancer vers un avenir
            meilleur, plus optimiste.
          </p>
        </div>
        <div className="prezicon1">
          <div className="social">
            <img
              src="https://fr.smiile.com/app/uploads/2020/02/illu_impactsocial.png"
              alt="socialicon"
            />
            <p>IMPACT</p>
            <p>social</p>
          </div>
          <div className="environnemental">
            <img
              src="https://fr.smiile.com/app/uploads/2020/02/illu_impactenvironnemental.png"
              alt="environnementalicon"
            />
            <p>IMPACT</p>
            <p>environnemental</p>
          </div>
          <div className="citoyen">
            <img
              src="https://fr.smiile.com/app/uploads/2020/02/illu_impactcitoyen.png"
              alt="citoyenicon"
            />
            <p>IMPACT</p>
            <p>citoyen</p>
          </div>
        </div>
        <div className="prez2">
          <h3>Notre concept</h3>
          <p>
            Apprendre à vivre mieux, à faire toi-même, ça t&apos;intéresse? I
            have a green te met en relation avec des personnes près de chez toi
            qui ont un savoir-faire, une pratique écologique à partager ou tout
            simplement un moment de communion avec la{" "}
            <span className="backcolor">nature</span> à vivre avec toi.
          </p>
        </div>
        <div className="prez3">
          <h3 className="monTitre">A quel prix?</h3>
          <p>
            Ici, c&apos;est <span className="italic">gratuit</span>. On apprend,
            on s&apos;enrichit autrement et la{" "}
            <span className="color">planète</span> en profite autant!
          </p>
        </div>
        <div className="prez4">
          <h2 className="monTitre">Que recherchez-vous ?</h2>
          <button type="button" className="categories" label="categories">
            <Link to="./Partages">Voir nos catégories</Link>
          </button>
        </div>
        <div className="prezicon2">
          <div className="essentiel">
            <img
              src="https://d19rpgkrjeba2z.cloudfront.net/static/gen/d78f61ea823da40e97989c4958df1f20.svg"
              alt="essentielicon"
            />
            <p>ESSENTIEL</p>
          </div>
          <div className="local">
            <img
              src="https://d19rpgkrjeba2z.cloudfront.net/static/gen/ec69f2f5e287083ea53b3fda096a12da.svg"
              alt="localicon"
            />
            <p>LOCAL</p>
          </div>
          <div className="fiable">
            <img
              src="https://d19rpgkrjeba2z.cloudfront.net/static/gen/9fd734cabd37d0759c0fe25dc673ac80.svg"
              alt="fiableicon"
            />
            <p>FIABLE</p>
          </div>
        </div>
      </div>
    </div>
  );
}
