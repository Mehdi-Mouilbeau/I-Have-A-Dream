import Recherches from "../components/Recherches";

export default function Home() {
  return (
    <div>
      <h2>I have a green and today, this earth smiles again!</h2>
      <p>{`Faire rêver l'écologie, c'est dès aujourd'hui... Ensemble.
      I have a green, c'est d'abord un état d'esprit, une envie de transmettre, de partager, de s'inspirer de notre passé pour faire miroiter un avenir plus optimiste.`}</p>
      <h3>Notre concept</h3>
      <p>{`Apprendre à vivre mieux, à faire toi-même, ça t'intéresse? I have a green te met en relation avec des personnes près de chez toi qui ont un savoir-faire, une pratique écologique à partager ou tout simplement un moment de communion avec la nature à vivre avec toi.`}</p>
      <h3>A quel prix?</h3>
      <p>{`Ici, c'est gratuit. On apprend, on s'enrichit autrement et la planète en profite autant!`}</p>
      <Recherches />;
    </div>
  );
}
