import Image from "next/image";
import classes from "./hero.module.css";

export default function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/max.png"
          alt="my image"
          width={300}
          height={300}
        ></Image>
      </div>
      <h1>hi, i'm max</h1>
      <p>I blog about web development</p>
    </section>
  );
}
